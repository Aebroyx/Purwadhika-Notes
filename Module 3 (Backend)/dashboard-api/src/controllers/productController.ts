import { Request, Response, NextFunction } from "express";
import prisma from "../connection";

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {name, price, description, stock} = req.body

        await prisma.products.create({
            data: {
                name,
                price,
                description,
                stock
            }
        })

        res.status(200).send({
            error: false,
            message: "Create Product Success",
            data: null
        })
    }
    catch (error){
        next({message: "Create Product Failed"})
    }
}