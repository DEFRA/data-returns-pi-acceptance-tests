'use strict';
const {defineStep} = require('cucumber');
const SubSelectPage = require('../../support/pages/RelOffsiteTransWasteWaterSubstanceSelect.page');

defineStep('I am on the off-site transfer in water waste substance select page', function () {
    SubSelectPage.onSubSelect();
    console.log('Substance Select Page');
});

defineStep('I select an off-site transfer in water waste substance', function () {
    SubSelectPage.selectNextUnused();
    console.log('Click required Substance');
    SubSelectPage.continue();
});
