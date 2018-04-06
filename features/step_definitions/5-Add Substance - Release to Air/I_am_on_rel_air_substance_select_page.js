'use strict';
const {defineStep} = require('cucumber');
const SubSelectPage = require('../../support/pages/RelAirSubstanceSelect.page');

defineStep('I am on the release to air substance select page', function () {
    SubSelectPage.onSubSelect();
    console.log('Substance Select Page');

});

defineStep('I select an release to air substance', function () {
    SubSelectPage.selectNextUnused();
    console.log('Click required Substance');
    SubSelectPage.continue();

});
