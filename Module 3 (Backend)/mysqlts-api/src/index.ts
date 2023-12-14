import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(express.json())
const port: number = 5000;

import db from './connection';
import util from 'util';
const query: any = util.promisify(db.query).bind(db);

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to MySQL + Typescript API</h1>')
})

app.get('/students', async(req: Request, res: Response): Promise<void> => {
    try {
        const data = await query('SELECT * FROM students')

        res.send({
            error: false,
            message: 'Get Students Success!',
            data: data
        })
    } catch (error) {
        res.status(500).send(
            {
                error: true,
                message: error
            }
        )
    }
})

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})