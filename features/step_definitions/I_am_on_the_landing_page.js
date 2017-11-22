'use strict';
const LandingPage = require('../support/pages/Landing.page');

module.exports = function () {
    this.defineStep('I am on the landing page', function () {
        LandingPage.isLoggedIn();
        console.log('Login page');

    });
};
