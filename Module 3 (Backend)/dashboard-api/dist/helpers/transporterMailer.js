"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporterNodemailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
exports.transporterNodemailer = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'aebroyx@gmail.com',
        pass: 'ifthuckcjfqrgirk'
    },
    tls: {
        rejectUnauthorized: false
    }
});
