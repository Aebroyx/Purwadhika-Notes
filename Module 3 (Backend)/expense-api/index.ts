import express, { Express, Request, Response } from "express";
import fs from 'fs';

const app: Express = express();
app.use(express.json())
const port: number = 5000;

interface IExpense {
    id: number
    name: string
    nominal: number
    categoryId: number
    date: string
}

interface ICategory {
    id: number
    name: string
}

// Get Expense List
app.get('/expenses', (req: Request, res: Response) => {
    try {
        const database: {expenses: Array<IExpense>} = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        res.status(200).send({
            error: false,
            message: "Get Expenses List Success!",
            data: database
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
});

// Get Expense Details
app.get('/expenses/:id', (req: Request, res: Response) => {
    try {
        const database: {expenses: Array<IExpense>}  = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));
        const { id } = req.params;

        let details: IExpense | null = null;

        for (const item of database.expenses) {
            if (item.id === Number(id)) {
                details = item;
            }
        }

        res.status(200).send({
            error: false,
            message: `Get expenses ${id} Success!`,
            data: details
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
});

// Create New Expense Data
app.post('/expenses', (req: Request, res: Response) => {
    try {
        const database: { expenses: Array<IExpense> } = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        const data: IExpense = { id: database.expenses.length + 1,...req.body}

        database.expenses.push(data)

        fs.writeFileSync('./database/db.json', JSON.stringify(database))

        res.status(200).send({
            error: false,
            message: 'Create new expense Success!',
            data: null
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
});

// Edit Expense Data
app.put('/expenses/:id', (req: Request, res: Response) => {
    try {
        const database: { expenses: Array<IExpense> } = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        const data: IExpense = req.body
        const { id } = req.params;

        database.expenses.forEach((items, index) => {
            if (items.id === Number(id)) {
                database.expenses[index] = {...data, id: Number(id)}
            }
        })

        fs.writeFileSync('./database/db.json', JSON.stringify(database))

        res.status(200).send({
            error: false,
            message: `Update expenses ${id} Success!`,
            data: null
        })
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
})

// Delete Expense Data
app.delete('/expenses/:id', (req: Request, res: Response) => {
    try {
        const database: { expenses: Array<IExpense> } = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        const data: IExpense = req.body
        const { id } = req.params;

        database.expenses.map((item, index) => {
            if (item.id === Number(id)) {
                database.expenses.splice(index, 1)
            }
        })

        fs.writeFileSync('./database/db.json', JSON.stringify(database))

        res.status(200).send({
            error: false,
            message: `Delete expenses ${id} Success!`,
            data: null
        })
    }
    catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
})

// Get Total Expense by Date Range
app.get('/expenses-by-date', (req: Request, res: Response) => {
    try {
        const database: { expenses: Array<IExpense>} = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        const range: any = req.query;
        let totalExpense = 0;

        database.expenses.forEach((item) => {
            if (item.date >= range.startdate && item.date <= range.enddate) {
                totalExpense += item.nominal;
            }
        })

        res.status(200).send({
            error: false,
            message: 'Get Total Expense by Date Range Success!',
            data: totalExpense
        });

    } catch (error: any) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
})

// Get Total Expense by Category
app.get('/expenses-by-category', (req: Request, res: Response) => {
    try {
        const database: { expenses: Array<IExpense> , categories: Array<ICategory>} = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));

        const {categoryId} = req.query;
        let totalExpense = 0;

        database.expenses.forEach((item) => {
            if (item.categoryId === Number(categoryId)) {
                totalExpense += item.nominal;
            }
        })

        res.status(200).send({
            error: false,
            message: 'Get Total Expense by Category Success!',
            data: totalExpense
        });

    } catch (error: any) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
})


app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})