'use strict';
const {defineStep} = require('cucumber');
const airDeleteConfirmPage = require('../../support/pages/RelAirDeleteConfirm.page');

defineStep('I am on the release to air substance delete confirmation page', function () {
    airDeleteConfirmPage.onAirDeleteConfirm();
    console.log('Delete Confirm Page');
});
