'use strict';
const util = require('util');
const path = require('path');
const winston = require('winston');
const fs = require('fs-extra');

// Selenium logging verbosity: silent | verbose | command | data | result | error
const seleniumLogLevel = process.env.SELENIUM_LOG_LEVEL || 'error';
// Winston log level (used by step definitions) (defaults to 'info', see winston for options)
const winstonLogLevel = process.env.WINSTON_LOG_LEVEL || 'info';

// Ensure logs folder exists
const logDir = path.resolve(__dirname, 'logs');
fs.ensureDirSync(logDir);

exports.config = {

    /*
     *
     * ==================
     * Specify Test Files
     * ==================
     * Define which test specs should run. The pattern is relative to the directory
     * from which `wdio` was called. Notice that, if you are calling `wdio` from an
     * NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
     * directory is where your package.json resides, so `wdio` will be called from there.
     *
     */
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
    // 'path/to/excluded/files'
    ],
    /*
     *
     * ============
     * Capabilities
     * ============
     * Define your capabilities here. WebdriverIO can run multiple capabilities at the same
     * time. Depending on the number of capabilities, WebdriverIO launches several test
     * sessions. Within your capabilities you can overwrite the spec and exclude options in
     * order to group specific specs to a specific capability.
     *
     * First, you can define how many instances should be started at the same time. Let's
     * say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
     * set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
     * files and you set maxInstances to 10, all spec files will get tested at the same time
     * and 30 processes will get spawned. The property handles how many capabilities
     * from the same test should run tests.
     *
     */
    maxInstances: 10,
    /*
     *
     * If you have trouble getting all important capabilities together, check out the
     * Sauce Labs platform configurator - a great tool to configure your capabilities:
     * https://docs.saucelabs.com/reference/platforms-configurator
     *
     */
    capabilities: [{
    /*
     * maxInstances can get overwritten per capability. So if you have an in-house Selenium
     * grid with only 5 firefox instances available you can make sure that not more than
     * 5 instances get started at a time.
     */
        maxInstances: 2,
        //
        browserName: 'firefox'
    }],
    /*
     *
     * ===================
     * Test Configurations
     * ===================
     * Define all options that are relevant for the WebdriverIO instance here
     *
     * By default WebdriverIO commands are executed in a synchronous way using
     * the wdio-sync package. If you still want to run your tests in an async way
     * e.g. using promises you can set the sync option to false.
     */
    sync: true,
    /*
     *
     * Level of logging verbosity: silent | verbose | command | data | result | error
     */
    logLevel: seleniumLogLevel,
    /*
     *
     * Enables colors for log output.
     */
    coloredLogs: true,
    /*
     *
     * If you only want to run your tests until a specific amount of tests have failed use
     * bail (default is 0 - don't bail, run all tests).
     */
    bail: 0,
    /*
     *
     * Saves a screenshot to a given path if a command fails.
     */
    screenshotPath: './errorShots/',
    /*
     *
     * Set a base URL in order to shorten url command calls. If your url parameter starts
     * with "/", then the base url gets prepended.
     */
    baseUrl: 'http://localhost:3000',
    /*
     *
     * Default timeout for all waitFor* commands.
     */
    waitforTimeout: 10000,
    /*
     *
     * Initialize the browser instance with a WebdriverIO plugin. The object should have the
     * plugin name as key and the desired plugin options as properties. Make sure you have
     * the plugin installed before running any tests. The following plugins are currently
     * available:
     * WebdriverCSS: https://github.com/webdriverio/webdrivercss
     * WebdriverRTC: https://github.com/webdriverio/webdriverrtc
     * Browserevent: https://github.com/webdriverio/browserevent
     * plugins: {
     *     webdrivercss: {
     *         screenshotRoot: 'my-shots',
     *         failedComparisonsRoot: 'diffs',
     *         misMatchTolerance: 0.05,
     *         screenWidth: [320,480,640,1024]
     *     },
     *     webdriverrtc: {},
     *     browserevent: {}
     * },
     *
     * Test runner services
     * Services take over a specific job you don't want to take care of. They enhance
     * your test setup with almost no effort. Unlike plugins, they don't add new
     * commands. Instead, they hook themselves up into the test process.
     * services: [],//
     * Framework you want to run your specs with.
     * The following are supported: Mocha, Jasmine, and Cucumber
     * see also: http://webdriver.io/guide/testrunner/frameworks.html
     *
     * Make sure you have the wdio adapter package for the specific framework installed
     * before running any tests.
     */
    /**
     * Project-specific configuration options
     *
     * Add any project-specific configuration options here (keep things separate from the standard wdio config)
     *
     */
    _projectConfiguration: {
    // Winston log level (used by step definitions) (defaults to 'info', see winston for options)
        winstonLogLevel: winstonLogLevel,
        // timeout that specifies a time to wait for the implicit element location strategy when locating elements using the element or elements commands
        implicitTimeout: 0,
        // time to wait for the page loading to complete
        pageTimeout: 30000,
        // time to wait for asynchronous scripts to run
        scriptTimeout: 30000
    },

    /*
     * Default timeout in milliseconds for request
     * if Selenium Grid doesn't send response
     */
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    // Framework to run specs with.
    framework: 'cucumber',
    // Test reporter for stdout.
    reporters: ['spec', 'junit'],
    reporterOptions: {
        junit: {
            outputDir: './logs/junit'
        }
    },

    /*
     *
     * Test reporter for stdout.
     * The only one supported by default is 'dot'
     * see also: http://webdriver.io/guide/testrunner/reporters.html
     * reporters: ['dot'],//
     * If you are using Cucumber you need to specify the location of your step definitions.
     */
    cucumberOpts: {
        require: require('./support/lib/utilities').findStepFiles('./features/step-definitions'), // <string[]> (file/dir) require files before executing features
        backtrace: false, // <boolean> show full backtrace for errors
        compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false, // <boolean> invoke formatters without executing steps
        failFast: false, // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true, // <boolean> disable colors in formatter output
        snippets: true, // <boolean> hide step definition snippets for pending steps
        source: true, // <boolean> hide source uris
        profile: [], // <string[]> (name) specify the profile to use
        strict: false, // <boolean> fail if there are any undefined or pending steps
        tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000, // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    /*
     *
     * =====
     * Hooks
     * =====
     * WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
     * it and to build services around it. You can either apply a single function or an array of
     * methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
     * resolved to continue.
     */
    /*
     * =====
     * Hooks
     * =====
     * WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
     * it and to build services around it. You can either apply a single function or an array of
     * methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
     * resolved to continue.
     *
     * Gets executed once before all workers get launched.
     */
    onPrepare: function (config, capabilities) {
        const prettyConfig = util.inspect(config, {depth: null, colors: true});
        const prettyCapabilities = util.inspect(capabilities, {depth: null, colors: true});
        winston.info(`Running tests with configuration: \nCapabilities: ${prettyCapabilities}}\n\nConfiguration:${prettyConfig}`);
    },

    /*
     *
     * Gets executed before test execution begins. At this point you can access all global
     * variables, such as `browser`. It is the perfect place to define custom commands.
     */
    before: function (capabilities, specs) {
    // Setup the Chai assertion framework
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();

        // reference to configuration object
        const cfg = this;
        // reference to the current session identifier
        const testSessionId = browser.session().sessionId;

        // Set up project specific timeout configuration settings
        browser.timeouts('implicit', cfg._projectConfiguration.implicitTimeout);
        browser.timeouts('script', cfg._projectConfiguration.scriptTimeout);
        browser.timeouts('page load', cfg._projectConfiguration.pageTimeout);

        /**
         * Safe version of the browser.isExisting() functionality
         *
         * Safari driver on browserstack likes to throw exceptions when you call isExisting on an element which doesn't exist.
         * This function protects against this.
         */
        browser.addCommand('isExistingSafe', function (selector) {
            try {
                return browser.isExisting(selector);
            } catch (e) {
                winston.warn('Ignoring exception thrown on isExisting call.');
                return false;
            }
        });

        /**
         * Configure winston logging
         */
        winston.configure({
            transports: [
                new (winston.transports.Console)({
                    'level': cfg._projectConfiguration.winstonLogLevel || 'info',
                    'colorize': true,
                    'silent': false,
                    'timestamp': true,
                    'json': false,
                    'showLevel': true,
                    'handleExceptions': false,
                    'humanReadableUnhandledException': false
                })
            ],
            filters: [
                function (level, msg) {
                    const sessionTxt = testSessionId ? testSessionId + ': ' : '';
                    const cap = browser.desiredCapabilities;
                    // let env = `${cap.os} ${cap.os_version} ${cap.browserName} ${cap.browser_version}`;
                    const env = `${cap.browserName || 'Unknown'} ${cap.browser_version || ''}`;

                    return `[0;35m[${sessionTxt}${env}][0;39m ${msg}`;
                }
            ]
        });
    }
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    /*
     * beforeSession: function (config, capabilities, specs) {
     * },
     */
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    /*
     * beforeSuite: function (suite) {
     * },
     */
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    /*
     * beforeHook: function () {
     * },
     */
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    /*
     * afterHook: function () {
     * },
     */
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    /*
     * beforeTest: function (test) {
     * },
     */
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    /*
     * beforeCommand: function (commandName, args) {
     * },
     */
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    /*
     * afterCommand: function (commandName, args, result, error) {
     * },
     */
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    /*
     * afterTest: function (test) {
     * },
     */
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    /*
     * afterSuite: function (suite) {
     * },
     */
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    /*
     * after: function (result, capabilities, specs) {
     * },
     */
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    /*
     * afterSession: function (config, capabilities, specs) {
     * },
     */
    /**
     * Gets executed after all workers got shut down and the process is about to exit. It is not
     * possible to defer the end of the process using a promise.
     * @param {Object} exitCode 0 - success, 1 - fail
     */
    /*
     * onComplete: function(exitCode) {
     * }
     */
};
