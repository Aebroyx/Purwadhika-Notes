import { Router } from "express";

const route = Router()

// Import productController
import * as productController from "../controllers/productController"

// Import Middleware
import { tokenVerify } from "../middleware/tokenVerification"
import { uploadValidator } from "../middleware/uploadValidator";

route.post('/create', uploadValidator, productController.createProduct)

export default route