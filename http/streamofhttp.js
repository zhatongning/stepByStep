const http = require('http')

// request is a instance of IncomingMessage
// response is a instance of ServerReponse

const server = http.createServer((req, res) => {
  // let { method, url, headers } = req
  // let body = ''
  // buffer object will be received
  // req.setEncoding('utf-8')
  // req.on('data', (chunk) => {
  //   body += chunk
  //   console.log(chunk)
  // })

  // if (method === 'POST' && url === '/echo') {
  //   req.pipe(res)
  // } else {
  //   res.statusCode = 404
  //   res.end('hello world')
  // }

  req.on('error', (err) => {
    console.log(err)
  })

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'X-Powered-By': 'bacon'
  })
  res.end(`<html><body><h1>hello nodejs</h1></body></html>`)
  // req.on('end', () => {
  //   try {
  //     res.writeHead(200, {
  //       'Content-Type': 'application/json',
  //       'X-Powered-By': 'bacon'
  //     })
  //     res.setHeader('Content-Type', 'application/json');
  //     res.setHeader('X-Powered-By', 'bacon');
  //     const data = JSON.parse(body)
  //     let type = typeof data
  //     res.end(`<html><body><h1>hello nodejs</h1></body></html>`)
  //   } catch (err) {
  //     res.statusCode = 400
  //     return res.end(`error: ${ err.message }`)
  //   }
  // })
})

server.listen(3888)

// curl localhost:3888 -d "\"hello world\""
// 不编码 <Buffer 22 68 65 6c 6c 6f 20 77 6f 72 6c 64 22>
// 编码  "hello world"
// string%