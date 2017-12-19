'use strict';
const LandingPage = require('../../support/pages/Landing.page');
module.exports = function () {
    this.defineStep('I continue to all sectors', function () {
        console.log('Login page');
        LandingPage.open();
        LandingPage.checkOpen();
        LandingPage.continue()
    });
};
