'use strict';
const {defineStep} = require('cucumber');
const OffsiteReleasePage = require('../../support/pages/ReleaseToOffsiteWasteWaterChallenge.page');

defineStep('I am on the off-site transfer in water waste challenge page', function () {
    OffsiteReleasePage.onOffsiteWWChallenge();
    console.log('Challenge Page');

});
