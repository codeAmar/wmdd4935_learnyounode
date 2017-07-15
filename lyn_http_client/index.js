var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data',(data)=>{ console.log(data)})
  response.on('error',(err) =>{console.error(err)})
}).on('error', console.error)
