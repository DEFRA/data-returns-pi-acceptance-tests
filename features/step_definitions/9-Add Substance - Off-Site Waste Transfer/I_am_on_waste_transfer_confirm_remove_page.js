'use strict';
const DeleteConfirmPage = require('../../support/pages/RelAirDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the release to air substance delete confirmation page', function () {
        DeleteConfirmPage.onDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
