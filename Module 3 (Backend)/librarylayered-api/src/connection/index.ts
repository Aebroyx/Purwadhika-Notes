import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'sudo_user', 
    password: 'password', 
    database: 'library'
})

db.connect((error: any) => {
    if(error) return console.log(error)

    console.log('Connected to Database')
})

export default db;