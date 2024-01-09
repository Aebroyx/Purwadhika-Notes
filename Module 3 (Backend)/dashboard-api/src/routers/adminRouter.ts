import { Router } from "express";

const route = Router()

// Import adminController
import * as adminController from "../controllers/adminController"

// Import middleware
import { tokenVerifyUser } from "../middleware/tokenVerification"

route.post("/register", adminController.register)
route.post("/login", adminController.login)
route.patch("/verification", tokenVerifyUser, adminController.verification)

export default route