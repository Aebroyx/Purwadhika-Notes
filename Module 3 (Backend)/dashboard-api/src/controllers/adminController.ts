import { Request, Response, NextFunction } from "express";

import prisma from '../connection';
import { hashMatch, hashPassword } from "../lib/hashPassword";
import JWT from "../lib/JWT";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, username, password, role} = req.body

        if (!email || !username || !password || !role) {
            return next({message: "Please insert email, username and password"})
        }

        const hashedPassword: string = await hashPassword(password)

        await prisma.admins.create({
            data: {
                email,
                username,
                password: hashedPassword,
                role
            }
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

        if (isCompare === true) {
            res.status(200).send({
                error: false,
                message: "Login Success",
                data: null
            })
        }
    }
    catch {
        next({message: "Login Failed"})
    }
}