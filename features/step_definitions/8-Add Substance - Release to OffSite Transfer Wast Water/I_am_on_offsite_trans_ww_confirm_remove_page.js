'use strict';
const {defineStep} = require('cucumber');
const WwDeleteConfirmPage = require('../../support/pages/RelOffsiteTransWasteWaterDeleteConfirm.page');

defineStep('I am on the off-site transfer in water waste substance delete confirmation page', function () {
    WwDeleteConfirmPage.onWaterDeleteConfirm();
    console.log('Delete Confirm Page');

});
