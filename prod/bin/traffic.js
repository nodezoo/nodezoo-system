var Wreck = require('wreck')


var rpm = 60*5
var okI = 0
var failI = 0
var start = Date.now()

setInterval(function () {
  Wreck.get('http://localhost:8000/api/query?q=nid', function (err) {
    okI += err?0:1
    failI += err?1:0
    console.log(Date.now()-start,okI,failI)
  })
}, 60000 / rpm)
