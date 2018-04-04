'use strict';
const NoseSummaryPage = require('../../support/pages/CheckNOSE.page');

module.exports = function () {
    this.defineStep('I am on nose summary', function () {
        NoseSummaryPage.isNoseSummary();
        console.log('Login page');

    });
};
