import { Request, Response, NextFunction } from "express";
import prisma from "../connection";

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await prisma.$transaction(async (tx) => {
        try {
            const {name, price, description, stock} = JSON.parse(req.body.data)
    
            const product = await tx.products.create({
                data: {
                    name,
                    price,
                    description,
                    stock
                }
            })

            const createImages: any = []
            
            if (req.files) {
            const filesArray = Array.isArray(req.files) ? req.files : req.files['bebas'];

            filesArray.forEach((item: any) => {
                createImages.push({
                    url: item.filename,
                    products_id: product.id
                })
            })

            await tx.productImages.createMany({
                data: createImages
            })
            }
    
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
    })
}