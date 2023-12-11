import express, { Express, Request, Response } from "express";
import fs from 'fs'; // FS: File System ---> Untuk Reading File
import {fsRead, fsWrite} from './utils/fs'


const app: Express = express();

app.use(express.json()) // Body Parser --> Untuk mengambil data body from client

const port: number = 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to Express + Typescript API</h1>')
})

interface IUsers {
    id: number,
    username: string,
    email: string,
    password: string

}

// Get Data Users
app.get('/users', (req: Request, res: Response) => {
    try {
        // Step-1 Reading File 'db.json'
        // use JSON.parse to covert from buffer to json utf-8 format
        const {users}: {users: Array<IUsers>} = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'))

        // Step-2 Sending to Client
        res.send({
            error: false,
            message: "Get Users Success!",
            data: users
        })
    } catch (error) {
        console.log(error)
    }
})

// Post/Create Data Users
app.post('/users', (req: Request, res: Response) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers: {users: Array<IUsers>} = JSON.parse(fs.readFileSync('./database/db.json', 'utf-8'))
        // findAllUsers = { users: [{}] --> findAllUsers.users}

        // Step-2 Get Resource Body from client
        const data: IUsers = {id: findAllUsers.users.length + 1, ...req.body}

        // Step-3 push data to array of object users
        findAllUsers.users.push(data)

        // Step-4 Save "users" into "db.json"
        fs.writeFileSync('./database/db.json', JSON.stringify(findAllUsers))

        // Step-5 Sending Response to Client
        res.send(
            {
                error: false,
                message: 'Create User Success!',
                data: null
            }
        )
    } catch (error) {
        console.log(error)
    }
})

// Put/Update Data Users
// lets try using utils read and write for put method
app.put('/users/:id', (req: Request, res: Response) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers: {users: Array<IUsers>} = fsRead()

        // Step-2 Get Resource Body from client
        const {id} = req.params
        const data: IUsers = req.body

        // Step-3 Update data to array of object users

        // if u want to change based on ID in body
        // const index = findAllUsers.users.findIndex((user) => user.id === data.id)
        // findAllUsers.users[index] = data

        // Best practice:
        findAllUsers.users.forEach((items, index) => {
            if (items.id === Number(id)) {
                findAllUsers.users[index] = {...data, id: Number(id)}
            }
        })

        // Step-4 Save "users" into "db.json"
        fsWrite(findAllUsers)

        // Step-5 Sending Response to Client
        res.send(
            {
                error: false,
                message: 'Update User Success!',
                data: null
            }
        )

    } catch (error) {
        console.log(error)
    }
})

// Delete Data Users
app.delete('/users/:id', (req: Request, res: Response) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers: {users: Array<IUsers>} = fsRead()

        // Step-2 Get Resource Body from client
        const {id} = req.params
        const data: IUsers = req.body

        // Step-3 Delete data to array of object users
        findAllUsers.users.map((item, index) => {
            if (item.id === Number(id)) {
                findAllUsers.users.splice(index, 1)
            }
        })

        // Step-4 Save "users" into "db.json"
        fsWrite(findAllUsers)

        // Step-5 Sending Response to Client
        res.send(
            {
                error: false,
                message: 'Delete User Success!',
                data: null
            }
        )
    }
    catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`)
})