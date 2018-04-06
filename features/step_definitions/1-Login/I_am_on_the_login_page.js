'use strict';
const {defineStep} = require('cucumber');
const Login = require('../../support/pages/Login-page');

defineStep('I am on the login page', function () {
    console.log('Login page');
    Login.open();
    Login.checkOpen();
});
