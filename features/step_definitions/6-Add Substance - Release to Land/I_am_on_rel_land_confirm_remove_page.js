'use strict';
const DeleteConfirmPage = require('../../support/pages/RelLandDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the release to land substance delete confirmation page', function () {
        DeleteConfirmPage.onDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
