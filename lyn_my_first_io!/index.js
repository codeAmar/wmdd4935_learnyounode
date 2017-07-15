var fs = require('fs')

var args = fs.readFileSync(process.argv[2])
var data = args.toString().split('\n').length - 1
console.log(data)
