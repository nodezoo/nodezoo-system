(function() {
  var weights = {
    test: 0.1
  }

  var services = [
    'web',
    'search',
    'info',
    'npm',
    'suggest',
  ]

  var inputs = []

  services.forEach(function(service){
    inputs.push({
      "name": "service.test."+service,
      "min": 0,
      "max": 1,
      "weight": weights.test * (1/services.length)
    })
    inputs.push({
      "name": "service.validate."+service,
      "min": 0,
      "max": 1,
      "weight": weights.test * (1/services.length)
    })
  })

  return {
    "graphiteHost": "127.0.0.1",
    "graphitePort": 2003,
    "port": 8125,
    "flushInterval": 1000,
    "backends": ["./backends/graphite", "./backends/deployrisk"],
    "deployrisk": {
      "inputs": inputs
    }
  }
})()
