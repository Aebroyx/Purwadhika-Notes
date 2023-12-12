import express, { Express, Request, Response } from "express";
import fs from 'fs';

const app: Express = express();
app.use(express.json())
const port: number = 5000;

interface IExpense {
    id: number
    name: string
    nominal: number
    category: string
    date: string
}

app.get('/expenses', (req: Request, res: Response) => {
    try {
        const data: IExpense = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'));
        console.log(data)
        res.send({
            error: false,
            message: "Get Expenses List Success!",
            data: {
                
            }
        })
    } catch (error) {
        
    }
});

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})