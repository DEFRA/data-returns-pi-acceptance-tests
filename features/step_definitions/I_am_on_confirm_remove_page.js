'use strict';
const DeleteConfirmPage = require('../support/pages/DeleteConfirm.page');

module.exports = function () {
    this.defineStep('I am on delete confirmation page', function () {
        DeleteConfirmPage.onDeleteConfirm();
        console.log('Delete Confirm Page');

    });
};
