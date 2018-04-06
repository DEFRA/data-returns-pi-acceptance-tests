'use strict';
const {defineStep} = require('cucumber');
const NoseSummaryPage = require('../../support/pages/CheckNOSE.page');

defineStep('I am on nose summary', function () {
    NoseSummaryPage.isNoseSummary();
    console.log('Login page');

});
