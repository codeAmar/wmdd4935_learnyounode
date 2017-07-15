const http = require('http')
const mapper = require('through2-map')

let server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('not a POST')
  }

  req.pipe(mapper(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
