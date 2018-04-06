'use strict';
const {defineStep} = require('cucumber');
const NacePage = require('../../support/pages/NACE.page');

defineStep('I am on the nace page', function () {
    NacePage.isNaceLoggedIn();
    console.log('Login page');
});

defineStep('I enter the nace value', function () {
    NacePage.naceEnterValue();
    console.log('Login page');
});
