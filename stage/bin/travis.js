var Dgram = require('dgram')
var Travis = require('travis-ci')

var travis = new Travis({
    version: '2.0.0'
})

var client = Dgram.createSocket('udp4')


var services = [
  'web',
  'search',
  'info',
  'npm',
  'suggest',
]

travis.repos('nodezoo').get(function (err, res) {
  var repos = res.repos
  var repomap = {}

  repos.forEach(function (repo) {
    var name = repo.slug.replace(/nodezoo\/nodezoo-/, '')
    if (-1 != services.indexOf(name)) {
      repomap[name] = repo
    }
  })

  services.forEach(function (service, index) {
    var repo = repomap[service]
    var data = new Buffer('deployrisk.service.test.'+service+':'+
                          ('passed'===repo.last_build_state?1:0)+'|g')
    console.log(index, data.toString())
    client.send(data, 0, data.length, 8125, '127.0.0.1',
                function(err) { if (err) seneca.log.warn(err) })

    if (index === services.length-1) {
      setTimeout(process.exit,111)
    }
  })
})
