const http = require('http')

const server = http.createServer((req, res) => {
  let body = ''
  // buffer object will be received
  req.setEncoding('utf-8')
  req.on('data', (chunk) => {
    body += chunk
    console.log(chunk)
  })

  req.on('end', () => {
    try {
      const data = JSON.parse(body)
      res.write(typeof data)
      res.end()
    } catch (err) {
      res.statusCode = 400
      return res.end(`error: ${ err.message }`)
    }
  })
})

server.listen(3888)

// curl localhost:3888 -d "\"hello world\""
// 不编码 <Buffer 22 68 65 6c 6c 6f 20 77 6f 72 6c 64 22>
// 编码  "hello world"
// string%