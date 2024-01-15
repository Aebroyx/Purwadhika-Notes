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
exports.getProducts = exports.deleteProduct = exports.createProduct = void 0;
const connection_1 = __importDefault(require("../connection"));
const fs_1 = __importDefault(require("fs"));
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
            if (req.file) {
                const filesArray = Array.isArray(req.files) ? req.files : req.files['bebas'];
                filesArray.forEach((item) => {
                    fs_1.default.rmSync(item.path);
                });
            }
            next({ message: "Create Product Failed" });
        }
    }));
});
exports.createProduct = createProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Get Id Product from Req
        const { productId } = req.params;
        console.log(productId);
        let imagesToDelete;
        yield connection_1.default.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
            // 2.1. Before Delete Images, Get Image Url to Delete Image File from Public
            imagesToDelete = yield tx.productImages.findMany({
                where: {
                    products_id: {
                        contains: productId
                    }
                }
            });
            // 2.2. Delete Product_Images
            yield tx.productImages.deleteMany({
                where: {
                    products_id: productId
                }
            });
            // 3. Delete Products
            yield tx.products.delete({
                where: {
                    id: productId
                }
            });
        }));
        // 4. Delete Images from public/images
        imagesToDelete.forEach((item) => {
            console.log(item);
            fs_1.default.rmSync('public/image/' + item.url);
        });
        res.status(200).send({
            error: false,
            message: "Delete Product Success",
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProduct = deleteProduct;
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield connection_1.default.products.findMany({
            include: {
                ProductImages: true
            }
        });
        res.status(200).send({
            error: false,
            message: "Get Products Success",
            data: products
        });
    }
    catch (error) {
        next({ message: "Get Products Failed" });
    }
});
exports.getProducts = getProducts;
