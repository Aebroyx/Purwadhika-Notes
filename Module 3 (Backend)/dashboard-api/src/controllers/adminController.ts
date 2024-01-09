import { Request, Response, NextFunction } from "express";

import prisma from '../connection';
import { hashMatch, hashPassword } from "../lib/hashPassword";
import { jwtCreate } from "../lib/JWT";
import { transporterNodemailer } from "../helpers/transporterMailer";
import fs from 'fs'
import Handlebars from "handlebars";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, username, password, role} = req.body

        if (!email || !username || !password || !role) {
            return next({message: "Please insert email, username and password"})
        }

        const hashedPassword: string = await hashPassword(password)

        const createUser =await prisma.admins.create({
            data: {
                email,
                username,
                password: hashedPassword,
                role
            }
        })

        const token = await jwtCreate({id: createUser.id, role: createUser.role})

        const emailTemplate = fs.readFileSync('src/helpers/activationTemplate.html', 'utf8');

        let compiledTemplate: any = await Handlebars.compile(emailTemplate);
        compiledTemplate = compiledTemplate({username, token})

        await transporterNodemailer.sendMail({
            from: 'Aebroyx The Developer',
            to: email,
            subject: 'Welcome to my dashboard-api, Please Activate Your Account',
            html: compiledTemplate
        })

        res.status(200).send({
            error: false,
            message: "Register Success",
            data: null
        })
    } catch (error: any) {
        if (error.code === "P2002") {
            return next({message: "Email already exist"})
        }
        next({message: "Register Failed"})
    }
}

export const verification = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        await prisma.admins.update({
            where: {
                id: req.body.id
            },
            data: {
                verified: 1
            }
        })

        res.status(200).send({
            error: false,
            message: "Verification Success",
            data: null
        })
    } catch (error) {
        res.status(400).send({
            error: true,
            message: "Verification Failed",
            data: null
        })
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {usernameOrEmail, password} = req.body

        const admin = await prisma.admins.findFirst({
            where: {
                OR: [
                    {email: usernameOrEmail},
                    {username: usernameOrEmail}
                ]
            }
        })

        if (!admin) {
            return next({message: "Email or username not found"})
        }

        const isCompare = await hashMatch(password, admin.password)

        if (isCompare === false) {
            return next({message: "Incorrect Password"})
        }

        const token = await jwtCreate({id: admin.id, role: admin.role})

        if (isCompare === true) {
            res.status(200).send({
                error: false,
                message: "Login Success",
                data: {
                    username: admin.username,
                    token
                }
            })
        }
    }
    catch {
        next({message: "Login Failed"})
    }
}