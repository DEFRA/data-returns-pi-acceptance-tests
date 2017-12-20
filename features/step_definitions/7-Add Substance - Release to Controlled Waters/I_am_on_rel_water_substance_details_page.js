'use strict';
const SubDetailsPage = require('../../support/pages/RelWaterSubstanceDetails.page');

module.exports = function () {
    this.defineStep('I am on the release to water substance details page', function () {
        SubDetailsPage.onSubDetails();
        console.log('Substance Select Page');

    });

    this.defineStep('I enter a release to water substance total', function () {
        SubDetailsPage.detailEnterValue();
        console.log('Click required Substance');

    });

    this.defineStep('I select a release to water substance unit', function () {
        SubDetailsPage.detailSelectUnit();
        console.log('Click required Substance');

    });

    this.defineStep('I select a release to water substance method', function () {
        SubDetailsPage.detailSelectMethod();
        console.log('Click required Substance');
        SubDetailsPage.continue()

    });

};