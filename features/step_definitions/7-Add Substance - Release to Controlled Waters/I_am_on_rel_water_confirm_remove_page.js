'use strict';
const DeleteConfirmPage = require('../../support/pages/RelWaterDeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on the release to water substance delete confirmation page', function () {
        DeleteConfirmPage.onDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
