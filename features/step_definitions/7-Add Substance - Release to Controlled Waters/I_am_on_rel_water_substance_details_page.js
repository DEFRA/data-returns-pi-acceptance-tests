'use strict';
const {defineStep} = require('cucumber');
const SubDetailsPage = require('../../support/pages/RelWaterSubstanceDetails.page');

defineStep('I am on the release to water substance details page', function () {
    SubDetailsPage.onSubDetails();
    console.log('Substance Select Page');
});

defineStep('I enter a release to water substance total', function () {
    SubDetailsPage.detailEnterValue();
    console.log('Click required Substance');
});

defineStep('I select a release to water substance unit', function () {
    SubDetailsPage.detailSelectUnit();
    console.log('Click required Substance');
});

defineStep('I select a release to water substance method', function () {
    SubDetailsPage.detailSelectMethod();
    console.log('Click required Substance');
    SubDetailsPage.continue();
});
