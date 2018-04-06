'use strict';
const {defineStep} = require('cucumber');
const NaceSummaryPage = require('../../support/pages/CheckNACE.page');

defineStep('I am on nace summary', function () {
    NaceSummaryPage.isNaceSummary();
    console.log('Login page');

});
