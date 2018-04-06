'use strict';
const {defineStep} = require('cucumber');
const LandDeleteConfirmPage = require('../../support/pages/RelLandDeleteConfirm.page');

defineStep('I am on the release to land substance delete confirmation page', function () {
    LandDeleteConfirmPage.onLandDeleteConfirm();
    console.log('Delete Confirm Page');

});
