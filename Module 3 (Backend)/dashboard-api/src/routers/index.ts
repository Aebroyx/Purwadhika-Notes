import express, { Router } from "express";

const route = Router()

route.use(express.json())

import adminRouter from "./adminRouter"

route.use("/admin", adminRouter)

export default route
