import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sudo_user',
    password: 'password',
    database: 'library'
})

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database connected')
    }
})

export default db;