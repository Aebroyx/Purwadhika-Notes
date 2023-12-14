import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sudo_user',
    password: 'password',
    database: 'jcwd2602_intro'
})

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Database connected')
    }
})

export default db;