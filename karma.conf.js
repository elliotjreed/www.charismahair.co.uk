import Puppeteer from 'puppeteer'
process.env.CHROME_BIN = Puppeteer.executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    browsers: ['ChromeHeadless'],

    reporters: ['progress'],

    port: 9876,
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,

    files: [
      {pattern: 'spec/**/*Spec.js', watched: false}
    ],

    preprocessors: {
      'spec/**/*Spec.js': ['webpack']
    },

    webpack: {},

    webpackMiddleware: {
      stats: 'errors-only'
    }
  })
}
