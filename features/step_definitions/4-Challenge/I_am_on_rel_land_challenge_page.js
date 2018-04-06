'use strict';
const {defineStep} = require('cucumber');
const AirReleasePage = require('../../support/pages/ReleaseToLandChallenge.page');

defineStep('I am on the release to land challenge page', function () {
    AirReleasePage.onLandChallenge();
    console.log('Challenge Page');

});
