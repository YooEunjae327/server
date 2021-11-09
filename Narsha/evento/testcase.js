const express = require('express')
const ejs = require('ejs')
const app = express() 
const mysql = require('mysql')
const url = require('url')

const conn = mysql.createConnection({ // mysql과 connection하는 부분
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    port     : '3306',
    database : 'teambuilding'
})

app.set('view engine', 'ejs')
app.set('views', './view')

app.get('/page', (req,res) => {
    console.log(req.query.name)
})

app.get('/user/readall', function(req, res){ 

    var sql = 'SELECT st_id,st_name FROM student'; 
    conn.query(sql, function(err, result, fields){
      if(err){
        console.log(err);
        res.status(500).send('Internal Server Error')
      }
        res.render('readall', { student : result }); 
    });
});



app.get('/user/read', (req, res) => {
    const sql = 'SELECT st_name FROM student'
    conn.query(sql, (err, student_name, fields) => {
        if(err)
        {
            console.log('error')
            res.status(404).send('Internal Server Error')
        }
        else
        {   
           
        for(let i = 0; i < student_name.length; i++)
        {

            if(req.query.name === Object.values(student_name[i]).join(''))
            {
                console.log('true')
                res.status(200).send(`존재하는 이름 : ${req.query.name}`)
                //res.render('read', { student : student_name[i]})
            }
            else
            {
               res.status(200).send('Not find name')
            }
  
        }
            console.log(Object.values(student_name[0]).join(''))
            // res.render('read',{ student : student_name})
        }
    })
})

// res.render('read', { student : student_name})

app.listen(3000, function() {
    console.log('server is running..')
})