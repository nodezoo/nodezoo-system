'use strict'

module.exports = {
  // tels fuge to proxy connections to docker. Allows
  // you to specifiy localhost in your microservices.
  proxy: 'docker',

  // Run docker containers if an image is specified.
  runDocker: true,

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
      run: 'node -r toolbag srv/base-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_metrics: {
      run: 'node -r toolbag srv/metrics-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_info: {
      run: 'node -r toolbag srv/info-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_search: {
      run: 'node -r toolbag srv/search-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_github: {
      run: 'node -r toolbag srv/github-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_npm: {
      run: 'node -r toolbag srv/npm-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_travis: {
      run: 'node -r toolbag srv/travis-dev.js --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_web: {
      run: 'node -r toolbag server/start.js --seneca.log=type:act',
      build: 'npm install; npm run build'
    }
  }
}
