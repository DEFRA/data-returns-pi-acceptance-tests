'use strict';
const WasteTransferTablePage = require('../../support/pages/WasteTransferTable.page');

module.exports = function () {
    this.defineStep('I am on the waste transfer table', function () {
        WasteTransferTablePage.onWasteTransferTable();
        console.log('On Waste Transfer Table');
    });
    this.defineStep('I select the add waste transfer link', function () {
        WasteTransferTablePage.clickAddWaste();
        console.log('Add Waste Transfer ');
    });
    this.defineStep('I delete a waste transfer', function () {
        WasteTransferTablePage.clickDelete();
        console.log('Delete Waste Transfer');
    });

    this.defineStep('I click continue on the waste transfer table', function () {
        WasteTransferTablePage.continue();
        console.log('Delete Waste Transfer');
    });
};