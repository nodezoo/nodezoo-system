var Wreck = require('wreck')

var msgs = [
  'role=suggest&cmd=suggest&query=n',
  'role=suggest&cmd=add&query=nid',
  'role=npm&cmd=get&name=nid',
  'role=github&cmd=get&name=nid',
  'role=search&cmd=search&query=nid',
  "msg$={role:search,cmd:insert,data:{name:'bob',version:'0.0.1',desc:'bob',id:'bob'}}",
  'role=info&cmd=get&name=nid',
  'role=info&need=part&part=foo&name=nid',
  'role=info&collect=part&part=foo&name=nid',
]

var rpm = 60*10


var start = Date.now()
console.log('t,msg,rt,ok,sz')


setInterval(function () {

  var msgstart = Date.now()
  var msg = msgs[Math.floor(msgs.length*Math.random())]
  Wreck.get('http://localhost:9000/act?'+msg, function (err,res,payload) {
    var t = Date.now()
    var net = 90 + Math.floor(20*Math.random())
    console.log([t-start,msg,net + 10*(t-msgstart) ,!err,payload.length].join(','))
  })

}, 60000 / rpm)
