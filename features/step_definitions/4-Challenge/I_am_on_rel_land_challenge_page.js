'use strict';
const AirReleasePage = require('../../support/pages/ReleaseToLandChallenge.page');

module.exports = function () {
    this.defineStep('I am on the release to land challenge page', function () {
        AirReleasePage.onLandChallenge();
        console.log('Challenge Page');

    });
};
