var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
    // Cloud9 specific code:
    hostname: process.env.IP,
    port: process.env.PORT,
    browsers: ['PhantomJS'],
    // local code:
    // browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
        'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
        mocha: {
            timeout: '5000'
        }
    },
    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    }
  });
};