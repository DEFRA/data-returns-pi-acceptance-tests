'use strict';
const OffsiteReleasePage = require('../../support/pages/ReleaseToOffsiteWasteWaterChallenge.page');

module.exports = function () {
    this.defineStep('I am on the off-site transfer in water waste challenge page', function () {
        OffsiteReleasePage.onOffsiteWWChallenge();
        console.log('Challenge Page');

    });
};
