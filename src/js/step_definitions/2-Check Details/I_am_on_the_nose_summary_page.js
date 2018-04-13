'use strict';
const {defineStep} = require('cucumber');
const NoseSummaryPage = require('../../pages/CheckNOSE.page');

defineStep('I am on nose summary', function () {
    NoseSummaryPage.isNoseSummary();
});
