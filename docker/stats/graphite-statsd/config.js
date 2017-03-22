{
  "graphiteHost": "127.0.0.1",
  "graphitePort": 2003,
  "port": 8125,
  "flushInterval": 1000,
  "backends": ["./backends/graphite", "./backends/deployrisk"],
  "deployrisk": {
    "inputs": [
      {
        "name": "foo",
        "max": 100,
        "weight": 0.2
      },
      {
        "name": "bar",
        "max": 1000,
        "weight": 0.2
      },
      {
        "name": "zed",
        "min": 400,
        "max": 1000,
        "mod": "invert",
        "weight": 0.6
      }
    ]
  }
}
