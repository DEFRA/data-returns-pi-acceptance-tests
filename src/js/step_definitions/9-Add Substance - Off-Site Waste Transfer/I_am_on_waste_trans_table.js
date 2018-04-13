'use strict';
const {defineStep} = require('cucumber');
const WasteTransferTablePage = require('../../pages/WasteTransferTable.page');

defineStep('I am on the waste transfer table', function () {
    WasteTransferTablePage.onWasteTransferTable();
    console.log('On Waste Transfer Table');
});
defineStep('I select the add waste transfer link', function () {
    WasteTransferTablePage.clickAddWaste();
    console.log('Add Waste Transfer ');
});
defineStep('I delete a waste transfer', function () {
    WasteTransferTablePage.clickDelete();
    console.log('Delete Waste Transfer');
});

defineStep('I click continue on the waste transfer table', function () {
    WasteTransferTablePage.continue();
    console.log('Delete Waste Transfer');
});
