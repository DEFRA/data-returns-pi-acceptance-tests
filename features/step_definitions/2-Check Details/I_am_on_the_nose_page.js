'use strict';
const {defineStep} = require('cucumber');
const NosePage = require('../../support/pages/NOSE.page');

defineStep('I am on the nose page', function () {
    NosePage.isNoseLoggedIn();
    console.log('Login page');
});

defineStep('I enter the nose value', function () {
    NosePage.noseEnterValue();
    console.log('Login page');
});
