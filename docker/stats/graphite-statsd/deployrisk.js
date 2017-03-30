/* Copyright (c) 2017 Richard Rodger and other contributors, MIT License */

var dgram = require('dgram')


function DeployRiskBackend(startupTime, config, emitter){
  var self = this

  this.client = dgram.createSocket('udp4')

  this.score = 0

  this.config = config.deployrisk || {}

  this.config.port = this.config.port || 8125
  this.config.host = this.config.host || '127.0.0.1'

  this.inputs = this.config.inputs || []

  this.inputs.forEach(function (input) {
    var mod = input.mod
    var max = input.max

    mod = 
      null == mod ? function (x) {return x}
    : 'invert' === mod ? function (x, input) {return input.min + input.max - x}
    : mod

    input.mod = mod

    input.min = input.min || 0
  })

  emitter.on('flush', function(timestamp, metrics) { 
    self.flush(timestamp, metrics)
  })

  emitter.on('status', function(callback) { 
    self.status(callback) 
  })
}


DeployRiskBackend.prototype.flush = function(timestamp, metrics) {

  var table = []

  this.inputs.forEach(function (input) {
    var name = 'deployrisk.'+input.name
    var min = input.min
    var max = input.max
    var mod = input.mod
    var weight = input.weight
    
    var v = metrics.gauges[name]

    if (null != v) {
      v = mod(v, input)
      table.push(  weight * Math.max(0, (Math.min(1, (v-min) / (max-min)))) )
    }
  })

  this.score = Math.round( 100 * table.reduce(function(ac, v) {return ac+v}, 0) )

  var data = new Buffer('deployrisk.score:'+this.score+'|g')
  this.client.send(data, 0, data.length, this.config.port, this.config.host,
              function(err) { if (err) console.log(err) })
}


DeployRiskBackend.prototype.status = function(write) {
  write(null, 'deployrisk', 'score', this.score)
}

exports.init = function(startupTime, config, events) {
  var instance = new DeployRiskBackend(startupTime, config, events)
  return true
}
