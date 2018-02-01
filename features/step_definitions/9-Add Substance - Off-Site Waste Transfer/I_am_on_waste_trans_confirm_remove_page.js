'use strict';
const WasteDeleteConfirmPage = require('../../support/pages/WasteTransferDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the waste transfer delete confirmation page', function () {
        WasteDeleteConfirmPage.onWasteDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
