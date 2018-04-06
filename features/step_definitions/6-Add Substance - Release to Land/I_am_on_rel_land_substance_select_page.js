'use strict';
const {defineStep} = require('cucumber');
const SubSelectPage = require('../../support/pages/RelLandSubstanceSelect.page');

defineStep('I am on the release to land substance select page', function () {
    SubSelectPage.onSubSelect();
    console.log('Substance Select Page');

});

defineStep('I select an release to land substance', function () {
    SubSelectPage.selectNextUnused();
    console.log('Click required Substance');
    SubSelectPage.continue();

});
