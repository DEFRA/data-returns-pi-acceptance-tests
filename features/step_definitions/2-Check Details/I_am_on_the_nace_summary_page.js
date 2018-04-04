'use strict';
const NaceSummaryPage = require('../../support/pages/CheckNACE.page');

module.exports = function () {
    this.defineStep('I am on nace summary', function () {
        NaceSummaryPage.isNaceSummary();
        console.log('Login page');

    });
};
