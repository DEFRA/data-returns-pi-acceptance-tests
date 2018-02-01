'use strict';
const WaterDeleteConfirmPage = require('../../support/pages/RelWaterDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the release to water substance delete confirmation page', function () {
        WaterDeleteConfirmPage.onWasteWaterDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
