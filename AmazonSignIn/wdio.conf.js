const browserCapabilities = require('./test/capabilities/browser.json')

const capabilities = [...browserCapabilities];


module.exports.config = {
    runner: 'local',

    reporters: [
    [
      'spec',
      {
        onlyFailures: true,
      },
    ],
  ],
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities,
    logLevel: 'error',
    coloredLogs: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },





}
