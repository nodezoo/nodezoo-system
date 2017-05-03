var Fs = require('fs')
var Readline = require('readline')
var Percentile = require('percentile')

var datafile = process.argv[2]
var start_time = parseInt(process.argv[3])
var end_time = parseInt(process.argv[4])


var rl = Readline.createInterface({
  input: Fs.createReadStream(datafile)
})


// last 10%
var cut = Math.floor(end_time - ((end_time - start_time) / 10))


// console.log(cut,start_time,end_time)

console.log('msg,hr,cr')


var msgmap = {}
var first = true

rl.on('line', function (line) {
  if (first) {
    first = false
    return
  }

  var fields = line.split(',')
  var msg = fields[1]
  var rt = (msgmap[msg] = msgmap[msg] || [])
  rt.push([parseInt(fields[0]),parseInt(fields[2])])
})


rl.on('close', function () {
  Object.keys(msgmap).forEach(function (msg) {
    var rt = msgmap[msg]
    
    ha = rt.filter(p => p[0]<cut).map(p => p[1])
    ca = rt.filter(p => p[0]>=cut).map(p => p[1])

    var hr = Percentile(90,ha)
    var cr = Percentile(90,ca)

    console.log([msg,hr,cr].join(','))
  }) 
})
