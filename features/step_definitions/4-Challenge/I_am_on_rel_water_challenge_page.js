'use strict';
const WaterReleasePage = require('../../support/pages/ReleaseToWaterChallenge.page');

module.exports = function () {
    this.defineStep('I am on the release to water challenge page', function () {
        WaterReleasePage.onWaterChallenge();
        console.log('Challenge Page');

    });
};
