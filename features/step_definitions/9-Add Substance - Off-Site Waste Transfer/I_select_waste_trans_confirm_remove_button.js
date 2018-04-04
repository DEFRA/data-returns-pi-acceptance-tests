'use strict';
const util = require('util');
const WasteRemove = require('../../support/pages/WasteTransferDeleteConfirm.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the waste transfer remove button', function () {
        winston.info('Sectors Object: ');
        WasteRemove.clickWasteRemoveButton();
    });
};