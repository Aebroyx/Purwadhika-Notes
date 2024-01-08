import { Router } from "express";

const route = Router()

import * as adminController from "../controllers/adminController"

route.post("/register", adminController.register)
route.post("/login", adminController.login)

export default route