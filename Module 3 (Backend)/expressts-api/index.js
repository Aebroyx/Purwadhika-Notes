"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs")); // FS: File System ---> Untuk Reading File
const fs_2 = require("./utils/fs");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Body Parser --> Untuk mengambil data body from client
const port = 5000;
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express + Typescript API</h1>');
});
// Get Data Users
app.get('/users', (req, res) => {
    try {
        // Step-1 Reading File 'db.json'
        // use JSON.parse to covert from buffer to json utf-8 format
        const { users } = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        // Step-2 Sending to Client
        res.send({
            error: false,
            message: "Get Users Success!",
            data: users
        });
    }
    catch (error) {
        console.log(error);
    }
});
// Post/Create Data Users
app.post('/users', (req, res) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers = JSON.parse(fs_1.default.readFileSync('./database/db.json', 'utf-8'));
        // findAllUsers = { users: [{}] --> findAllUsers.users}
        // Step-2 Get Resource Body from client
        const data = Object.assign({ id: findAllUsers.users.length + 1 }, req.body);
        // Step-3 push data to array of object users
        findAllUsers.users.push(data);
        // Step-4 Save "users" into "db.json"
        fs_1.default.writeFileSync('./database/db.json', JSON.stringify(findAllUsers));
        // Step-5 Sending Response to Client
        res.send({
            error: false,
            message: 'Create User Success!',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
// Put/Update Data Users
// lets try using utils read and write for put method
app.put('/users/:id', (req, res) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers = (0, fs_2.fsRead)();
        // Step-2 Get Resource Body from client
        const { id } = req.params;
        const data = req.body;
        // Step-3 Update data to array of object users
        // if u want to change based on ID in body
        // const index = findAllUsers.users.findIndex((user) => user.id === data.id)
        // findAllUsers.users[index] = data
        // Best practice:
        findAllUsers.users.forEach((items, index) => {
            if (items.id === Number(id)) {
                findAllUsers.users[index] = Object.assign(Object.assign({}, data), { id: Number(id) });
            }
        });
        // Step-4 Save "users" into "db.json"
        (0, fs_2.fsWrite)(findAllUsers);
        // Step-5 Sending Response to Client
        res.send({
            error: false,
            message: 'Update User Success!',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
// Delete Data Users
app.delete('/users/:id', (req, res) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers = (0, fs_2.fsRead)();
        // Step-2 Get Resource Body from client
        const { id } = req.params;
        const data = req.body;
        // Step-3 Delete data to array of object users
        findAllUsers.users.map((item, index) => {
            if (item.id === Number(id)) {
                findAllUsers.users.splice(index, 1);
            }
        });
        // Step-4 Save "users" into "db.json"
        (0, fs_2.fsWrite)(findAllUsers);
        // Step-5 Sending Response to Client
        res.send({
            error: false,
            message: 'Delete User Success!',
            data: null
        });
    }
    catch (error) {
        console.log(error);
    }
});
app.get('/login', (req, res) => {
    try {
        // Step-1 Reading File "db.json"
        // use JSON.parse to covert from buffer to json utf-8 format
        const findAllUsers = (0, fs_2.fsRead)();
        // Step-2 Get Resource Body from client
        const data = req.query;
        console.log(data);
        let dataLogin = null;
        // Comparing data body and data in db.json
        for (const item of findAllUsers.login) {
            if (item.username === data.username && item.password === data.password || item.email === data.email && item.password === data.password) {
                dataLogin = { id: item.id, username: item.username, email: item.email };
            }
            else {
                continue;
            }
        }
        if (dataLogin) {
            res.status(200).send({
                error: false,
                message: 'Login Success!',
                data: dataLogin
            });
        }
        else {
            throw { status: 400, message: 'Wrong Username or Password!' };
        }
    }
    catch (error) {
        res.status(error.status || 500).send({
            error: true,
            message: error.message || 'Something went wrong!',
            data: null
        });
    }
});
app.listen(port, () => {
    console.log(`[SERVER] Server Running on Port ${port}`);
});
