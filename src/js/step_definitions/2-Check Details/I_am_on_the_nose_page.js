'use strict';
const {defineStep} = require('cucumber');
const NosePage = require('../../pages/NOSE.page');

defineStep('I am on the nose page', function () {
    NosePage.isNoseLoggedIn();
});

defineStep('I enter the nose value', function () {
    NosePage.noseEnterValue();
});
