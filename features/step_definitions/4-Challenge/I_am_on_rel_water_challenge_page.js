'use strict';
const AirReleasePage = require('../../support/pages/ReleaseToWaterChallenge.page');

module.exports = function () {
    this.defineStep('I am on the release to water challenge page', function () {
        AirReleasePage.onWaterChallenge();
        console.log('Challenge Page');

    });
};
