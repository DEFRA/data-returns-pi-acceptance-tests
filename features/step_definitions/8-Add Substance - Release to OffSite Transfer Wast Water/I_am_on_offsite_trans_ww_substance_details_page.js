'use strict';
const SubDetailsPage = require('../../support/pages/RelOffsiteTransWasteWaterSubstanceDetails.page');

module.exports = function () {
    this.defineStep('I am on the off-site transfer in water waste substance details page', function () {
        SubDetailsPage.onSubDetails();
        console.log('Substance Select Page');

    });

    this.defineStep('I enter a off-site transfer in water waste substance total', function () {
        SubDetailsPage.detailEnterValue();
        console.log('Click required Substance');

    });

    this.defineStep('I select a off-site transfer in water waste substance unit', function () {
        SubDetailsPage.detailSelectUnit();
        console.log('Click required Substance');

    });

    this.defineStep('I select a off-site transfer in water waste substance method', function () {
        SubDetailsPage.detailSelectMethod();
        console.log('Click required Substance');
        SubDetailsPage.continue()

    });

};