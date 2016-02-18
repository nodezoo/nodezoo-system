'use strict'

module.exports = {

  // tels fuge to proxy connections to docker. Allows
  // you to specifiy localhost in your microservices.
  proxy: 'docker',

  // Run docker containers and images if
  // they are in the yml file passed in
  runDocker: true,

  // Log to file, not console
  tail: false,

  // Restart microservices if they explode
  restartOnError: true,

  // Ignore all this junk
  exclude: [
    '**/node_modules',
    '**/data',
    '**/.git',
    '**/CURRENT',
    '**/LOG*',
    '**/MANIFEST*',
    '**/*.ldb',
    '**/*.log'
  ],

  // You can specifiy overrides, really handy
  // to run single file services or things without
  // Dockerfiles.
  overrides: {

    // We need a base for our mesh, nodezoo comes
    // it a premade script to act as a mesh base.
    nodezoo_mesh: {
      run: 'npm run mesh'
    }
  }
}
