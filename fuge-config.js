'use strict'

module.exports = {
  proxy: 'docker',
  runDocker: true,
  tail: false,
  restartOnError: true,
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
  overrides: {
   msgstats: {
     run: 'node ./system/msgstats.js'
   },
   mesh: {
     run: 'node ./system/base-node.js'
   }
 }
};
