'use strict';
const {defineStep} = require('cucumber');
const SubDetailsPage = require('../../support/pages/RelAirSubstanceDetails.page');

defineStep('I am on the release to air substance details page', function () {
    SubDetailsPage.onSubDetails();
    console.log('Substance Select Page');

});

defineStep('I enter a release to air substance total', function () {
    SubDetailsPage.detailEnterValue();
    console.log('Click required Substance');

});

defineStep('I select a release to air substance unit', function () {
    SubDetailsPage.detailSelectUnit();
    console.log('Click required Substance');

});

defineStep('I select a release to air substance method', function () {
    SubDetailsPage.detailSelectMethod();
    console.log('Click required Substance');
    SubDetailsPage.continue();

});
