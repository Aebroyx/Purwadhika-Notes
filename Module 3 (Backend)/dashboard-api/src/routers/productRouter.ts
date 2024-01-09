import { Router } from "express";

const route = Router()

// Import productController
import * as productController from "../controllers/productController"

// Import Middleware
import { tokenVerify } from "../middleware/tokenVerification"

route.post('/create', tokenVerify, productController.createProduct)

export default route