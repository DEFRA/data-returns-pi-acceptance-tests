'use strict';
const StartPage = require('../../support/pages/login.page');

module.exports = function () {
    this.defineStep('I navigate to the login page', function () {
        StartPage.open();
        StartPage.checkOpen();
    });
};
