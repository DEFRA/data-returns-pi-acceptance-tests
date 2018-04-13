'use strict';
const {defineStep} = require('cucumber');
const LandingPage = require('../../pages/Landing.page');

defineStep('I am on the landing page', function () {
    LandingPage.isLoggedIn();
});
