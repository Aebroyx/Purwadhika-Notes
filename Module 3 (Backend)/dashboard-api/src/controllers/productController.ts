import { Request, Response, NextFunction } from "express";
import prisma from "../connection";
import fs from 'fs';

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
            if(req.file) {
                const filesArray = Array.isArray(req.files) ? req.files : req.files['bebas'];
                filesArray.forEach((item: any) => {
                    fs.rmSync(item.path)
                })
            }
            next({message: "Create Product Failed"})
        }
    })
}

export const deleteProduct = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // 1. Get Id Product from Req
        const {productId} = req.params
        console.log(productId)

        let imagesToDelete: any
        await prisma.$transaction(async(tx) => {
            // 2.1. Before Delete Images, Get Image Url to Delete Image File from Public
            imagesToDelete = await tx.productImages.findMany({
                where: {
                    products_id: {
                        contains: productId
                    }
                }
            })
            // 2.2. Delete Product_Images
            await tx.productImages.deleteMany({
                where: {
                    products_id: productId
                }
            })

            // 3. Delete Products
            await tx.products.delete({
                where: {
                    id: productId
                }
            })
        })

        // 4. Delete Images from public/images
        imagesToDelete.forEach((item: any) => {
            console.log(item)
            fs.rmSync('public/image/' + item.url)
        })

        res.status(200).send({
            error: false,
            message: "Delete Product Success",
            data: null
        })
    } catch (error) {
        console.log(error)
    }
}