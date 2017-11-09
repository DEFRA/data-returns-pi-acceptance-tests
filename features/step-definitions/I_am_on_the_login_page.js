'use strict';
const LoginPage = require('../../support/pages/login.page');
module.exports = function () {
    this.defineStep('I am on the login page', function () {
        LoginPage.open();
        LoginPage.checkOpen();
    });
};
