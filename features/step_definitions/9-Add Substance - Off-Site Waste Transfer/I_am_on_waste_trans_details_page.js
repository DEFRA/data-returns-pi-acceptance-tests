'use strict';
const {defineStep} = require('cucumber');
const WasteDetailsPage = require('../../support/pages/WasteTransAddDetails.page');

defineStep('I am on the waste transfer add page', function () {
    WasteDetailsPage.onWasteDetails();
    console.log('Add Waste Transfer Page');

});

defineStep('I enter a EWC code', function () {
    WasteDetailsPage.detailEWCCode();
    console.log('Add EWC code');

});

defineStep('I enter a WFD code', function () {
    WasteDetailsPage.detailWFDCode();
    console.log('Add WFD code');

});

defineStep('I enter a waste transfer total', function () {
    WasteDetailsPage.detailWasteTotal();
    console.log('Add waste transfer total');
    WasteDetailsPage.continue();

});
