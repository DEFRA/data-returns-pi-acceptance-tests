'use strict';
const {defineStep} = require('cucumber');
const AirReleasePage = require('../../support/pages/ReleaseToAirChallenge.page');

defineStep('I am on the release to air challenge page', function () {
    AirReleasePage.onAirChallenge();
    console.log('Challenge Page');

});
