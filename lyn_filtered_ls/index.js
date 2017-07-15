const fs = require('fs')
const path = require('path')


let extension = '.' + process.argv[3]

fs.readdir(process.argv[2], function (err, data) {
  if (err) return console.error(err)
   data.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  })
})
