'use strict';
const SubDetailsPage = require('../../support/pages/RelLandSubstanceDetails.page');

module.exports = function () {
    this.defineStep('I am on the release to land substance details page', function () {
        SubDetailsPage.onSubDetails();
        console.log('Substance Select Page');

    });

    this.defineStep('I enter a release to land substance total', function () {
        SubDetailsPage.detailEnterValue();
        console.log('Click required Substance');

    });

    this.defineStep('I select a release to land substance unit', function () {
        SubDetailsPage.detailSelectUnit();
        console.log('Click required Substance');

    });

    this.defineStep('I select a release to land substance method', function () {
        SubDetailsPage.detailSelectMethod();
        console.log('Click required Substance');
        SubDetailsPage.continue()

    });

};