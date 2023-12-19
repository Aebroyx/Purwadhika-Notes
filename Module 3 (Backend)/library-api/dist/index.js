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
const connection_1 = __importDefault(require("./connection"));
const util_1 = __importDefault(require("util"));
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const query = util_1.default.promisify(connection_1.default.query).bind(connection_1.default);
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 5000;
// DISCLAIMER IM USING ANY FOR SOME DATATYPE TEMPORARILY
// starting to use Moment JS for date and time because new Date from JS is not reliable
app.get('/', (req, res) => {
    res.send('<h1>Welcome to MySQL + Typescript API</h1>');
});
// Admin can login at the shift time only
app.get('/adminlogin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputData = req.query;
        const data = yield query(`SELECT * FROM admins a JOIN admins_schedule asch ON a.id = asch.id WHERE a.email = ${inputData.email} AND a.password = ${inputData.password}`);
        if (data.length === 0)
            throw { message: 'Incorrect Email or Password!' };
        // new date isnt reliable
        // const currentDate: any = new Date()
        // using moment
        const currentDate = (0, moment_1.default)().format('HH:mm:ss');
        const shiftStartTime = (0, moment_1.default)(data[0].start_time, 'HH:mm:ss');
        const shiftEndTime = (0, moment_1.default)(data[0].end_time, 'HH:mm:ss');
        if ((0, moment_1.default)(currentDate, 'HH:mm:ss').isBetween(shiftStartTime, shiftEndTime)) {
            res.status(200).send({
                error: false,
                message: 'Login Success!',
            });
        }
        else {
            throw new Error('Cannot Login, not in working hours!');
        }
        // This if u want to use javascript loop login however less efficent
        /*
        data.forEach((item: any) => {
            if(item.email === inputData.email && item.password === inputData.password){
                
            }
        })
        */
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
}));
// Admin can input new book and supply new book into library branch
app.post('/addbook', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = req.body;
        // Assuming your 'books' table has auto-incremented 'book_id' field
        const insertBookQuery = 'INSERT INTO books SET ?';
        const addBooks = yield query(insertBookQuery, {
            title: bookData.title,
            author: bookData.author,
            ISBN: bookData.ISBN,
            publication_year: bookData.publication_year
        });
        const addBooksBranch = yield query('INSERTo INTO boks_branches SET ?', {
            stocks: bookData.stocks,
            books_id: addBooks.insertId,
            branches_id: bookData.branches_id
        });
        const addBooksCategory = yield query('INSERT INTO category_books SET ?', {
            books_id: addBooks.insertId,
            categories_id: bookData.categories_id
        });
        res.status(200).send({
            error: false,
            message: 'Book Added!',
            data: addBooks.insertId
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
}));
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
