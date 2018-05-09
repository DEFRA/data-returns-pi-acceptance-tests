'use strict';
const {defineStep} = require('cucumber');
const WasteDetailsPage = require('../../pages/WasteTransAddDetails.page');

defineStep('I am on the waste transfer add page', function () {
    WasteDetailsPage.open();
    WasteDetailsPage.checkOpen();
    console.log('Add Waste Transfer Page');

});

// I choose the "02 01 02" EWC code

defineStep(/^I choose the "([^"]+)" EWC code$/, function (ewcCode) {
    WasteDetailsPage.detailEWCCode(ewcCode);
    console.log('Add EWC code');

});

defineStep(/^I choose the "([^"]+)" RD code$/, function (rdCode) {
    WasteDetailsPage.detailWFDCode(rdCode);
    console.log('Add EWC RD code');

});

defineStep('I enter a waste transfer total', function () {
    WasteDetailsPage.detailWasteTotal();
    console.log('Add waste transfer total');
    WasteDetailsPage.continue();

});
