'use strict';
const WasteTransPage = require('../../support/pages/WasteTransChallenge.page');

module.exports = function () {
    this.defineStep('I am on the waste transfer challenge page', function () {
        WasteTransPage.onWasteTransChallenge();
        console.log('Challenge Page');

    });
};
