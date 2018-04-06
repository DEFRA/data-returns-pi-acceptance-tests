'use strict';
const {defineStep} = require('cucumber');
const SubSelectPage = require('../../support/pages/RelWaterSubstanceSelect.page');

defineStep('I am on the release to water substance select page', function () {
    SubSelectPage.onSubSelect();
    console.log('Substance Select Page');
});

defineStep('I select an release to water substance', function () {
    SubSelectPage.selectNextUnused();
    console.log('Click required Substance');
    SubSelectPage.continue();
});
