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
// Get Expense List
app.get('/expenses', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        res.status(200).send({
            error: false,
            message: "Get Expenses List Success!",
            data: database
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
});
// Get Expense Details
app.get('/expenses/:id', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const { id } = req.params;
        let details = null;
        for (const item of database.expenses) {
            if (item.id === Number(id)) {
                details = item;
            }
        }
        res.status(200).send({
            error: false,
            message: `Get expenses ${id} Success!`,
            data: details
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
});
// Create New Expense Data
app.post('/expenses', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const data = Object.assign({ id: database.expenses.length + 1 }, req.body);
        database.expenses.push(data);
        fs_1.default.writeFileSync('./database/db.json', JSON.stringify(database));
        res.status(200).send({
            error: false,
            message: 'Create new expense Success!',
            data: null
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
});
// Edit Expense Data
app.put('/expenses/:id', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const data = req.body;
        const { id } = req.params;
        database.expenses.forEach((items, index) => {
            if (items.id === Number(id)) {
                database.expenses[index] = Object.assign(Object.assign({}, data), { id: Number(id) });
            }
        });
        fs_1.default.writeFileSync('./database/db.json', JSON.stringify(database));
        res.status(200).send({
            error: false,
            message: `Update expenses ${id} Success!`,
            data: null
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
});
// Delete Expense Data
app.delete('/expenses/:id', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const data = req.body;
        const { id } = req.params;
        database.expenses.map((item, index) => {
            if (item.id === Number(id)) {
                database.expenses.splice(index, 1);
            }
        });
        fs_1.default.writeFileSync('./database/db.json', JSON.stringify(database));
        res.status(200).send({
            error: false,
            message: `Delete expenses ${id} Success!`,
            data: null
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        });
    }
});
// Get Total Expense by Date Range
app.get('/expenses-by-date', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const range = req.query;
        let totalExpense = 0;
        database.expenses.forEach((item) => {
            if (item.date >= range.startdate && item.date <= range.enddate) {
                totalExpense += item.nominal;
            }
        });
        res.status(200).send({
            error: false,
            message: 'Get Total Expense by Date Range Success!',
            data: totalExpense
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
});
// Get Total Expense by Category
app.get('/expenses-by-category', (req, res) => {
    try {
        const database = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        const { categoryId } = req.query;
        let totalExpense = 0;
        database.expenses.forEach((item) => {
            if (item.categoryId === Number(categoryId)) {
                totalExpense += item.nominal;
            }
        });
        res.status(200).send({
            error: false,
            message: 'Get Total Expense by Category Success!',
            data: totalExpense
        });
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
});
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
