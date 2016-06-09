'use strict'

module.exports = {
  // tels fuge to proxy connections to docker. Allows
  // you to specifiy localhost in your microservices.
  proxy: 'docker',

  // Run docker containers if an image is specified.
  runDocker: false,

  // Log to file, not console logs are found in ./logs
  tail: false,

  // Restart microservices if they explode, lets say no.
  restartOnError: false,

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

  // We override the docker files here so we can keep them geared towards release.
  // Notice we don't use npm to start, this is because npm doesn't like when we
  // want to be able to run multiple copies of our services, so we stick to the
  // command we would have called via npm run start.
  overrides: {
    nodezoo_base: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_info: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_search: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_github: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_npm: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_travis: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_updater: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_dequeue: {
      run: 'node srv/start.js',
      build: 'npm install'
    },

    nodezoo_web: {
      run: 'node server/start.js',
      build: 'npm install; npm run build'
    },

    nodezoo_coveralls: {
      run: 'node srv/start.js',
      build: 'npm install'
    }

  }
}
