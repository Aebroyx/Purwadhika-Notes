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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 5000;
const connection_1 = __importDefault(require("./connection"));
const util_1 = __importDefault(require("util"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
app.get('/', (req, res) => {
    res.send('<h1>Welcome to MySQL + Typescript API</h1>');
});
app.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield query('SELECT * FROM students');
        res.send({
            error: false,
            message: 'Get Students Success!',
            data: data
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
}));
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
