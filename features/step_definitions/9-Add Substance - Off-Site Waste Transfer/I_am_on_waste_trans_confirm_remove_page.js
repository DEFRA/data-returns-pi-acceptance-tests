'use strict';
const {defineStep} = require('cucumber');
const WasteDeleteConfirmPage = require('../../support/pages/WasteTransferDeleteConfirm.page');

defineStep('I am on the waste transfer delete confirmation page', function () {
    WasteDeleteConfirmPage.onWasteDeleteConfirm();
    console.log('Delete Confirm Page');

});
