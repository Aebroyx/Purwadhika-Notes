"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fsWrite = exports.fsRead = void 0;
const fs_1 = __importDefault(require("fs"));
const fsRead = () => {
    return JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
};
exports.fsRead = fsRead;
const fsWrite = (param) => {
    fs_1.default.writeFileSync("./database/db.json", JSON.stringify(param));
};
exports.fsWrite = fsWrite;
