// Controller: Fungsinya Untuk Melakukan Req & Res

import { Request, Response } from "express";

import moment from 'moment';

// Import Service
import * as AdminService from '../services/AdminService';

import db from '../connection';
import util from 'util';
const query: any = util.promisify(db.query).bind(db);

export const login = async(req: Request, res: Response): Promise<void> => {
    try {
        const {username, password} = req.query as {username: string, password: string}

        const findAdmin = await AdminService.queryLogin({username, password})
        
        if(findAdmin.length === 0) throw {status: 300, message: 'Login Failed!'}
        
        const loginTime: any = moment(new Date(), 'HH:mm:ss')
        const clockIn: any = moment(findAdmin[0].clock_in, 'HH:mm:ss')
        const clockOut: any = moment(findAdmin[0].clock_out, 'HH:mm:ss')
        
        if(loginTime.isBetween(clockIn, clockOut) === false) 
        throw {status: 400, message: 'Login Failed! Not in Shift Time!'}

        res.status(200).send({
            error: false, 
            message: 'Login Success', 
            data: null
        })
    } catch (error: any) {
        res.status(error.status || 500).send({
            error: true, 
            message: error.message, 
            data: null
        })
    }
}

export const createNewBook = async(req: Request, res: Response): Promise<void> => {
    try {
        await query('START TRANSACTION')

        const {title, publisher, publish_year, branch_id, category_id} = req.body 

        const insertId = await AdminService.queryCreateNewBook({title, publisher, publish_year})

        branch_id.forEach((item: any) => {
            item.unshift(insertId)
            item.push(0)
        })

        category_id.forEach((item: any) => {
            item.push(insertId)
        })

        await AdminService.queryCreateBookHasBranch({branch_id})

        await AdminService.queryCreateBookHasCategory({category_id})
        
        await query('COMMIT')

        res.status(201).send({
            error: false, 
            message: 'Create New Book Success!', 
            data: null 
        })
    } catch (error) {
        await query('ROLLBACK')
        console.log(error)
    }
}

export const findBranchAndCategory = async(req: Request, res: Response): Promise<void> => {
    try {
        const {findCategories, findBranch} = await AdminService.queryFindBranchAndCategory()

        res.status(200).send({
            error: false, 
            message: 'Get Categories & Branches Success!', 
            data: {
                findCategories, 
                findBranch
            }
        })
    } catch (error) {
        console.log(error)
    }
}