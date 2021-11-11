app.get('/create', function (req, res) {
  fs.readdir('./data', function (error, filelist) {
    var title = 'WEB - create'
    var list = template.list(filelist)
    var html = template.HTML(
      title,
      list,
      `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `,
      ''
    )
    res.send(html)
  })
})

// form에서 post방식으로 전달하기에 app.post를 사용
app.post('/create_process', function (req, res) {
  var body = ''
  req.on('data', function (data) {
    body = body + data
  })
  req.on('end', function () {
    var post = qs.parse(body)
    var title = post.title
    var description = post.description
    fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
      res.redirect(`/page/${title}`)
    })
  })
})
