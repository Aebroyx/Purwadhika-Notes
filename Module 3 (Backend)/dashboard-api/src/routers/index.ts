import express, { Router } from "express";

const route = Router()

route.use(express.json())
route.use("*/image", express.static('public/image'))

// Import Routers
import adminRouter from "./adminRouter"
import productRoute from "./productRouter"

route.use("/admin", adminRouter)
route.use("/products", productRoute)


export default route
