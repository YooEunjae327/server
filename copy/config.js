import mysql from 'mysql'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'test',
})

connection.connect()
