'use strict';
const {defineStep} = require('cucumber');
const NaceSummaryPage = require('../../pages/CheckNACE.page');

defineStep('I am on nace summary', function () {
    NaceSummaryPage.isNaceSummary();
});
