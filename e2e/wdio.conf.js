exports.config = {
  maxInstances: 1,
  host: 'selenium',
  port: 4444,
  specs: ['test/**/*.js'],
  capabilities: [{
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'http://app:5300',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot'],
  onPrepare: function() {
    console.log('Starting end2end tests...')
    require('babel-register');
  },
  onComplete: function() {
    console.log('All done!')
  },
  before: function() {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  }
}
