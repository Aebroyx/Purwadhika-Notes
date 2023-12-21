import db from './connection';
import util from 'util';
import express, { Express, Request, Response } from "express";
import moment from 'moment';

const query: any = util.promisify(db.query).bind(db);

const app: Express = express();

app.use(express.json())
const port: number = 5000;

// DISCLAIMER IM USING ANY FOR SOME DATATYPE TEMPORARILY
// starting to use Moment JS for date and time because new Date from JS is not reliable

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to MySQL + Typescript API</h1>')
})

// Admin can login at the shift time only
app.get('/adminlogin', async(req: Request, res: Response): Promise<void> => {
    try {
        const inputData: any = req.query
        const data: any = await query(`SELECT * FROM admins a JOIN admins_schedule asch ON a.id = asch.id WHERE a.email = ${inputData.email} AND a.password = ${inputData.password}`);
        if (data.length === 0) throw {message: 'Incorrect Email or Password!'}

        // new date isnt reliable
        // const currentDate: any = new Date()

        // using moment
        const currentDate: any = moment().format('HH:mm:ss')
        const shiftStartTime = moment(data[0].start_time, 'HH:mm:ss');
        const shiftEndTime = moment(data[0].end_time, 'HH:mm:ss');

        if (moment(currentDate, 'HH:mm:ss').isBetween(shiftStartTime, shiftEndTime)) {
            res.status(200).send({
                error: false,
                message: 'Login Success!',
            })
        } else {
            throw new Error('Cannot Login, not in working hours!')
        }

        // This if u want to use javascript loop login however less efficent
        /*
        data.forEach((item: any) => {
            if(item.email === inputData.email && item.password === inputData.password){
                
            }
        })
        */
        
    } catch (error: any) {
        res.status(500).send(
            {
                error: true,
                message: error.message
            }
        )
    }
})

// Admin can input new book and supply new book into library branch
app.post('/addbook', async(req: Request, res: Response): Promise<void> => {
    try {
        const bookData: any = req.body;

        // Assuming your 'books' table has auto-incremented 'book_id' field
        const insertBookQuery =
          'INSERT INTO books SET ?'
    
        const addBooks = await query(insertBookQuery, {
          title: bookData.title,
          author: bookData.author,
          ISBN: bookData.ISBN,
          publication_year: bookData.publication_year
        });

        const addBooksBranch = await query(
            'INSERT INTO books_branches SET ?', {
                stocks: bookData.stocks,
                books_id: addBooks.insertId,
                branches_id: bookData.branches_id
            }
        )

        const addBooksCategory = await query(
            'INSERT INTO category_books SET ?', {
                books_id: addBooks.insertId,
                categories_id: bookData.categories_id
            }
        )
    
        res.status(200).send(
            {
                error: false,
                message: 'Book Added!',
                data: addBooks.insertId
            }
        )
    } catch (error: any) {
        res.status(500).send(
            {
                error: true,
                message: error.message
            }
        )
    }
})

// Admin can edit books
app.put('/editbook', async (req: Request, res: Response): Promise<void> => {
    try {
        const bookId: number = req.body.id;
        const updatedData = req.body;

        // Update main book details
        const updateBookQuery = `UPDATE books SET ? WHERE id = ?`;
        await query(updateBookQuery, [updatedData, bookId]);

        // Optionally update category, if provided
        if (updatedData.category_id) {
            const updateCategoryQuery = `UPDATE category_books SET categories_id = ? WHERE books_id = ?`;
            await query(updateCategoryQuery, [updatedData.category_id, bookId]);
        }

        // Optionally update stock, if provided
        if (updatedData.branch_id && updatedData.new_stock) {
            const updateStockQuery = `UPDATE books_branches SET stocks = ? WHERE books_id = ? AND branches_id = ?`;
            await query(updateStockQuery, [updatedData.new_stock, bookId, updatedData.branch_id]);
        }

        res.status(200).send({
            error: false,
            message: 'Book updated successfully!'
        });
    } catch (error: any) {
        res.status(500).send({
            error: true,
            message: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})