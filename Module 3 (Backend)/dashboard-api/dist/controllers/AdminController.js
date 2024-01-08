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
exports.login = exports.register = void 0;
const connection_1 = __importDefault(require("../connection"));
const hashPassword_1 = require("../lib/hashPassword");
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password, role } = req.body;
        if (!email || !username || !password || !role) {
            return next({ message: "Please insert email, username and password" });
        }
        const hashedPassword = yield (0, hashPassword_1.hashPassword)(password);
        yield connection_1.default.admins.create({
            data: {
                email,
                username,
                password: hashedPassword,
                role
            }
        });
        res.status(200).send({
            error: false,
            message: "Register Success",
            data: null
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            return next({ message: "Email already exist" });
        }
        next({ message: "Register Failed" });
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usernameOrEmail, password } = req.body;
        const admin = yield connection_1.default.admins.findFirst({
            where: {
                OR: [
                    { email: usernameOrEmail },
                    { username: usernameOrEmail }
                ]
            }
        });
        if (!admin) {
            return next({ message: "Email or username not found" });
        }
        const isCompare = yield (0, hashPassword_1.hashMatch)(password, admin.password);
        if (isCompare === false) {
            return next({ message: "Incorrect Password" });
        }
        if (isCompare === true) {
            res.status(200).send({
                error: false,
                message: "Login Success",
                data: null
            });
        }
    }
    catch (_a) {
        next({ message: "Login Failed" });
    }
});
exports.login = login;
