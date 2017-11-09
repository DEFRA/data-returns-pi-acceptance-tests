'use strict';
const Login = require('../support/pages/login');
module.exports = function () {
    this.defineStep('I submit a username and password', function () {
        Login.submitLogin('12@email.com', 'a');
    });
};
