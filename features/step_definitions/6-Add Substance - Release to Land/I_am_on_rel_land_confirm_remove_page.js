'use strict';
const LandDeleteConfirmPage = require('../../support/pages/RelLandDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the release to land substance delete confirmation page', function () {
        LandDeleteConfirmPage.onLandDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
