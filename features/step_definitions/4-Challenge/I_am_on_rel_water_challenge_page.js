'use strict';
const {defineStep} = require('cucumber');
const WaterReleasePage = require('../../support/pages/ReleaseToWaterChallenge.page');

defineStep('I am on the release to water challenge page', function () {
    WaterReleasePage.onWaterChallenge();
    console.log('Challenge Page');
});
