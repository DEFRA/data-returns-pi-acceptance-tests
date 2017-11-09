'use strict';
const LandingPage = require('../../support/pages/landing.page');
module.exports = function () {
    this.defineStep('I am on the landing page', function () {
        LandingPage.open();
        LandingPage.checkOpen();
    });
};
