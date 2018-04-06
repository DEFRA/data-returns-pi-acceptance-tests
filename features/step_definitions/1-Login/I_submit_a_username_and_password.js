'use strict';
const {defineStep} = require('cucumber');
const LoginPage = require('../../support/pages/Login-page');
defineStep('I submit a username and password', function () {
    LoginPage.submitLogin('12@email.com', 'a');
});
