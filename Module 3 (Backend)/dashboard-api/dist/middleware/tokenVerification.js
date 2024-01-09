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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerifyUser = exports.tokenVerify = void 0;
const JWT_1 = require("../lib/JWT");
const tokenVerify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get Token from Headers
        const token = req.headers.authorization;
        const payload = yield (0, JWT_1.jwtVerify)(token);
        if (!payload) {
            throw { message: "Invalid Token" };
        }
        if (payload.role !== "ADMIN") {
            throw { message: "Unauthorized Access" };
        }
        next();
    }
    catch (error) {
        res.status(400).send({
            error: true,
            message: error.message,
            data: null
        });
    }
});
exports.tokenVerify = tokenVerify;
const tokenVerifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get Token from Headers
        const token = req.headers.authorization;
        const verifiedPayload = yield (0, JWT_1.jwtVerify)(token); // Renamed 'payload' to 'verifiedPayload'
        req.body = verifiedPayload;
        next();
    }
    catch (error) {
        res.status(400).send({
            error: true,
            message: error.message,
            data: null
        });
    }
});
exports.tokenVerifyUser = tokenVerifyUser;
