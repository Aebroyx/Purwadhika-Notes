import express, { Router } from "express";

const route = Router()

route.use(express.json())

// Import Routers
import adminRouter from "./adminRouter"
import productRoute from "./productRouter"

route.use("/admin", adminRouter)
route.use("/products", productRoute)

export default route
