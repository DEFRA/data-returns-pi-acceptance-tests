'use strict';
const {defineStep} = require('cucumber');
const Login = require('../../support/pages/Login-page');

defineStep('I am on the login page', function () {
    Login.open();
    Login.checkOpen();
});
