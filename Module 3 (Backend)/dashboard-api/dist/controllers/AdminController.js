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
exports.login = exports.verification = exports.register = void 0;
const connection_1 = __importDefault(require("../connection"));
const hashPassword_1 = require("../lib/hashPassword");
const JWT_1 = require("../lib/JWT");
const transporterMailer_1 = require("../helpers/transporterMailer");
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password, role } = req.body;
        if (!email || !username || !password || !role) {
            return next({ message: "Please insert email, username and password" });
        }
        const hashedPassword = yield (0, hashPassword_1.hashPassword)(password);
        const createUser = yield connection_1.default.admins.create({
            data: {
                email,
                username,
                password: hashedPassword,
                role
            }
        });
        const token = yield (0, JWT_1.jwtCreate)({ id: createUser.id, role: createUser.role });
        const emailTemplate = fs_1.default.readFileSync('src/helpers/activationTemplate.html', 'utf8');
        let compiledTemplate = yield handlebars_1.default.compile(emailTemplate);
        compiledTemplate = compiledTemplate({ username, token });
        yield transporterMailer_1.transporterNodemailer.sendMail({
            from: 'Aebroyx The Developer',
            to: email,
            subject: 'Welcome to my dashboard-api, Please Activate Your Account',
            html: compiledTemplate
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
const verification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.default.admins.update({
            where: {
                id: req.body.id
            },
            data: {
                verified: 1
            }
        });
        res.status(200).send({
            error: false,
            message: "Verification Success",
            data: null
        });
    }
    catch (error) {
        res.status(400).send({
            error: true,
            message: "Verification Failed",
            data: null
        });
    }
});
exports.verification = verification;
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
        const token = yield (0, JWT_1.jwtCreate)({ id: admin.id, role: admin.role });
        if (isCompare === true) {
            res.status(200).send({
                error: false,
                message: "Login Success",
                data: {
                    username: admin.username,
                    token
                }
            });
        }
    }
    catch (_a) {
        next({ message: "Login Failed" });
    }
});
exports.login = login;
