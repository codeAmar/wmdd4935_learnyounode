var fs = require('fs')

fs.readFile(process.argv[2] , function (err, content) {
  if (err) {
    return console.log(err)
  }
  var data = content.toString().split('\n').length - 1
  console.log(data)
})
