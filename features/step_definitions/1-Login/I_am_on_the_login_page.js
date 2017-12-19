'use strict';
const Login = require('../../support/pages/Login-page');
module.exports = function () {
    this.defineStep('I am on the login page', function () {
        console.log('Login page');
        Login.open();
        Login.checkOpen();
    });
};
