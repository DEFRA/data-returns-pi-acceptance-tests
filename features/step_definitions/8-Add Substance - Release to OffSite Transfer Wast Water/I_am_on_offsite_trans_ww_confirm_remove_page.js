'use strict';
const DeleteConfirmPage = require('../../support/pages/RelOffsiteTransWasteWaterDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the off-site transfer in water waste substance delete confirmation page', function () {
        DeleteConfirmPage.onDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
