'use strict';
const AirReleasePage = require('../../support/pages/ReleaseToAirChallenge.page');

module.exports = function () {
    this.defineStep('I am on challenge page', function () {
        AirReleasePage.onAirChallenge();
        console.log('Challenge Page');

    });
};
