'use strict';
const {defineStep} = require('cucumber');
const LandingPage = require('../../support/pages/Landing.page');

defineStep('I am on the landing page', function () {
    LandingPage.isLoggedIn();
    console.log('Login page');
});
