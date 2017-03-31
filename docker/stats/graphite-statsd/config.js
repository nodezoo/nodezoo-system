(function() {
  var weights = {
    test: 0.3,
    validate: 0.4,
    perf: 0.3,
  }

  var services = [
    'web',
    'search',
    'info',
    'npm',
    'suggest',
  ]

  var endpoints = [
    'index',
    'info',
    'query'
  ]

  var inputs = []

  services.forEach(function (service) {
    inputs.push({
      name: "service.test."+service,
      min: 0,
      max: 1,
      weight: weights.test * (1/services.length)
    })
    inputs.push({
      name: "service.validate."+service,
      min: 0,
      max: 1,
      weight: weights.validate * (1/services.length)
    })
  })

  endpoints.forEach(function (endpoint) {
    inputs.push({
      name: 'perf.'+endpoint,
      min: 300,
      max: 1000,
      mod: 'invert',
      weight: weights.perf * (1/endpoints.length)
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
