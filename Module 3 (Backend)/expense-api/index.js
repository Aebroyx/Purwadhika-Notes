"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 5000;
app.get('/expenses', (req, res) => {
    try {
        const data = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        console.log(data);
        res.send({
            error: false,
            message: "Get Expenses List Success!",
            data: {}
        });
    }
    catch (error) {
    }
});
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
