'use strict';
const LoginPage = require('../support/pages/Login-page');
module.exports = function () {
    this.defineStep('I submit a username and password', function () {
        LoginPage.submitLogin('12@email.com', 'a');
    });
};
