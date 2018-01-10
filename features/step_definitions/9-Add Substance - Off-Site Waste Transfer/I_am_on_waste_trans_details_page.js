'use strict';
const WasteDetailsPage = require('../../support/pages/WasteTransAddDetails.page');

module.exports = function () {
    this.defineStep('I am on the waste transfer add page', function () {
        WasteDetailsPage.onWasteDetails();
        console.log('Add Waste Transfer Page');

    });

    this.defineStep('I enter a EWC code', function () {
        WasteDetailsPage.detailEWCCode();
        console.log('Add EWC code');

    });

    this.defineStep('I enter a WFD code', function () {
        WasteDetailsPage.detailWFDCode();
        console.log('Add WFD code');

    });

    this.defineStep('I enter a waste transfer total', function () {
        WasteDetailsPage.detailWasteTotal();
        console.log('Add waste transfer total');
        WasteDetailsPage.continue();

    });
};