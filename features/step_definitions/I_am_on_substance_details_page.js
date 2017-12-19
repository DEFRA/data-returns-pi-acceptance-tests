'use strict';
const SubDetailsPage = require('../support/pages/SubstanceDetails.page');

module.exports = function () {
    this.defineStep('I am on the substance details page', function () {
        SubDetailsPage.onSubDetails();
        console.log('Substance Select Page');

    });

    this.defineStep('I enter a total', function () {
        SubDetailsPage.detailEnterValue();
        console.log('Click required Substance');

    });

    this.defineStep('I select a unit', function () {
        SubDetailsPage.detailSelectUnit();
        console.log('Click required Substance');

    });

    this.defineStep('I select a method', function () {
        SubDetailsPage.detailSelectMethod();
        console.log('Click required Substance');
        SubDetailsPage.continue()

    });

};