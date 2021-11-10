import mysql from 'mysql'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'myweb',
})

db.connect()

export default db
