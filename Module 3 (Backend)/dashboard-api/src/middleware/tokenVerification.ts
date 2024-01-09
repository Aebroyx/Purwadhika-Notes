import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "../lib/JWT";

export const tokenVerify = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Get Token from Headers
        const token: any = req.headers.authorization

        const payload: any = await jwtVerify(token)
        
        if (!payload) {
            throw {message: "Invalid Token"}
        }

        if(payload.role !== "ADMIN") {
            throw {message: "Unauthorized Access"}
        }

        next()
    } catch (error: any) {
        res.status(400).send({
            error: true,
            message: error.message,
            data: null
        })
    }
}

export const tokenVerifyUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Get Token from Headers
        const token: any = req.headers.authorization

        const verifiedPayload: any = await jwtVerify(token); // Renamed 'payload' to 'verifiedPayload'

        req.body = verifiedPayload;

        next()
    } catch (error: any) {
        res.status(400).send({
            error: true,
            message: error.message,
            data: null
        })
    }
}