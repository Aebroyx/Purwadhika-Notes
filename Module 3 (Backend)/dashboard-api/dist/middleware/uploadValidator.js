"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadValidator = void 0;
const multer_1 = require("../lib/multer");
const fs_1 = __importDefault(require("fs"));
const uploadValidator = (req, res, next) => {
    const uploadResult = multer_1.upload.fields([{ name: 'bebas', maxCount: 3 }]);
    uploadResult(req, res, (err) => {
        try {
            if (err)
                throw err;
            let isError = '';
            if (req.files) {
                const filesArray = Array.isArray(req.files) ? req.files : req.files['bebas'];
                if (Array.isArray(filesArray)) {
                    filesArray.forEach((item) => {
                        console.log(item);
                        if (item.size > 5000000) {
                            isError += `${item.originalname} Size too Large. Maximum Size 5Mb`;
                        }
                    });
                }
            }
            if (isError)
                throw { message: isError, images: req.files };
            next();
        }
        catch (error) {
            if (error.images.bebas) {
                error.images.bebas.forEach((item) => {
                    fs_1.default.rmSync(item.path);
                });
            }
            res.status(500).send({
                error: true,
                message: `Upload Failed! ${error.message}`,
                data: null
            });
        }
    });
};
exports.uploadValidator = uploadValidator;
