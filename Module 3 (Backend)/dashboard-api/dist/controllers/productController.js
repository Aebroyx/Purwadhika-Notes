"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const connection_1 = __importDefault(require("../connection"));
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, price, description, stock } = JSON.parse(req.body.data);
            const product = yield tx.products.create({
                data: {
                    name,
                    price,
                    description,
                    stock
                }
            });
            const createImages = [];
            if (req.files) {
                const filesArray = Array.isArray(req.files) ? req.files : req.files['bebas'];
                filesArray.forEach((item) => {
                    createImages.push({
                        url: item.filename,
                        products_id: product.id
                    });
                });
                yield tx.productImages.createMany({
                    data: createImages
                });
            }
            res.status(200).send({
                error: false,
                message: "Create Product Success",
                data: null
            });
        }
        catch (error) {
            console.log(error);
            next({ message: "Create Product Failed" });
        }
    }));
});
exports.createProduct = createProduct;
