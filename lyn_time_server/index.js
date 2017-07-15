const net = require('net')

function initialZero (i) {
  return (i < 10 ? '0' : '') + i
}

function func () {
  var d = new Date()
  return d.getFullYear() + '-' +
    initialZero(d.getMonth() + 1) + '-' +
    initialZero(d.getDate()) + ' ' +
    initialZero(d.getHours()) + ':' +
    initialZero(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(func() + '\n')
})

server.listen(Number(process.argv[2]))
