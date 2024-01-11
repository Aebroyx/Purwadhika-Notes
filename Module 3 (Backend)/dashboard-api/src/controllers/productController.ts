import { Request, Response, NextFunction } from "express";
import prisma from "../connection";

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {name, price, description, stock} = JSON.parse(req.body.data)

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
        console.log(error)
        next({message: "Create Product Failed"})
    }
}