'use strict';
const {defineStep} = require('cucumber');
const WaterDeleteConfirmPage = require('../../support/pages/RelWaterDeleteConfirm.page');

defineStep('I am on the release to water substance delete confirmation page', function () {
    WaterDeleteConfirmPage.onWasteWaterDeleteConfirm();
    console.log('Delete Confirm Page');
});
