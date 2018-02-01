'use strict';
const WwDeleteConfirmPage = require('../../support/pages/RelOffsiteTransWasteWaterDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the off-site transfer in water waste substance delete confirmation page', function () {
        WwDeleteConfirmPage.onWaterDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
