// 필요한 묘듈선언
const express = require('express');
const bodyParser = require('body-parser');
const ejs=require("ejs");
const path = require('path');
const mysql = require('mysql');

const conn = mysql.createConnection({//DB와 연결
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    port     : '3306',
    database : 'teambuilding'
});

const app = express();// express 사용을 위해 선언
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');// app.set을 이용해 view engine과 ejs를 딕셔너리로 변경 {ket : value}
// 화면 엔진을 ejs로 설정
app.set('views', './view');// {'views' : './view'} 

app.set('port', process.env.PORT || 3000);//서버 포트를 지정 port : 3000


app.post('/user/register', (req,res) => {
  const id = req.body.st_id
  const name = req.body.st_name
  const password = req.body.st_pw
  const grade = req.body.st_grade
  const classe = req.body.st_class
  const num = req.body.st_num
  conn.query(() => {
    const sql = `INSERT INTO student (st_id, st_name, st_pw, st_grade, st_class, st_num) VALUES ('${id}', '${name}', '${password}', '${grade}', '${classe}', '${num}')`
    conn.query(sql, (err, result, fields) => {
      if(err) throw err
      else{
       console.log('1 record inserted')
        res.redirect('/')
      }
    })
  })
})

app.post('/user/test', (req, res) => {
  const drop = req.body.delsc
  const sql = `DELETE FROM student WHERE st_seq = '${drop}'`
  conn.query(sql, (err, data) => {
    if(err) throw err
    console.log('DELETE')
    
  })
})

app.post('/user/readall', (req,res) => {
  const key = req.body.keycheak
  console.log(key)
})


// conn.connect((err) => {
//   if(err) throw err
//   const id = res
//   const sql = "INSERT INTO student (st_id, st_name, st_pw, st_grade, st_class) VALUES ('Michelle', 'Blue Village 1', 111, 111, 1)"
//   conn.query(sql, (err, result) => {
//     if(err) throw err
//     console.log('1 record inserted')
//   })
// })

app.get('/', (req, res) => {//localhost:3000 일때 get 방식으로
  res.sendFile(path.join(__dirname, '/index.html'));// 파일을 보낸다 여기서 path.join(__dirname, 'index.html')는 index.html의 파일 위치를 찾아낸다
  // 요약하면 만약 localhost:3000을 입력하면 index.html파일의 위치를 찾고 그것을 res.sendFile롤 보낸다
});

app.get('/user/readall', function(req, res){// localhost:3000/user/readall일때 get방식으로
  var sql = 'SELECT * FROM student';// mysql에 student테이플에 st_id와 st_name를 가저 온다
  conn.query(sql, function(err, result, fields){//DB를 읽어오기 위해 사용
    if(err){// 만약 에러가 생길 경우
      console.log(err);// 콘솔창에 'err'출력
      res.status(500).send('Internal Server Error')// 서버 응답 상태를 500으로 지정하고 send로 'Interanl Server Error를 보내고 출력
    }
      res.render('readall', { student : result });// 아닐 경우에 readall.ejs를 불러 오고 보낸다
  });
});

//app.get(['/user/read/st_name/:id'], function(req, res){ 
app.get('/user/read/', function(req, res){ // localhost:3000/user/read일때 get방식으로
  //let id = param['id'];
  let id=req.query.st_name;//?st_name=blank중에 blank부분만 가져옴 
  //DB에 있는 st_name과 비교 하기 위해
  if(id) {
    var sql = 'SELECT st_id,st_name FROM student where st_name="' + id + '"';//DB에서 내가 입력한 이름의 테이블만 가져온다
    console.log(sql)
    conn.query(sql, function(err, result, fields) {//DB를 읽어오기 위해 사용
      if(err){// 만약에 에러가 생길 경우
        console.log(err);// 콘솔창에 'err'출력
        res.status(500).send('Internal Server Error')// 서버 응답 상태를 500으로 지정하고 send로 'Interanl Server Error를 보내고 출력
      }
      else res.render('search', { student: result });// 아닐 경우에 search.ejs를 불러 오고 보낸다
    });
  }
});


app.listen(app.get('port'), () => {//3000번 포트에서 실행
  console.log(app.get('port'), '번 포트에서 대기 중');
});

