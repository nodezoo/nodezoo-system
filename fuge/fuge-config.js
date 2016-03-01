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

  // We override the docker files here so we can keep them geared towards
  // release. It's a nice slight of hand to get local / release config easy.
  overrides: {

    // notice we don't use npm to start, this is because npm doesn't like that
    // we want to be able to run multiple copies of our services, so we stick
    // use the command we would have called via npm run start

    nodezoo_base: {
      run: 'node -r toolbag srv/base-dev.js --seneca.options.tag=nodezoo-base --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_metrics: {
      run: 'node -r toolbag srv/dev.js --seneca.options.tag=nodezoo-metrics --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_info: {
      run: 'node -r toolbag srv/info-dev.js --seneca.options.tag=nodezoo-info --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_search: {
      run: 'node -r toolbag srv/search-dev.js --seneca.options.tag=nodezoo-search --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_github: {
      run: 'node -r toolbag srv/github-dev.js --seneca.options.tag=nodezoo-npm --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_npm: {
      run: 'node -r toolbag srv/npm-dev.js --seneca.options.tag=nodezoo-search --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    nodezoo_web: {
      run: 'node -r toolbag server/start.js --seneca.options.tag=nodezoo-web --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install'
    },

    vidi_web: {
      run: 'node server/start.js "monolith:true" --seneca.options.tag=vidi-web --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install; npm run build;'
    },

    concorda_web: {
      run: 'node server/start.js --seneca.options.tag=concorda-web --seneca.options.debug.short_logs=true --seneca.log=type:act',
      build: 'npm install; npm run build;'
    }
  }
}
