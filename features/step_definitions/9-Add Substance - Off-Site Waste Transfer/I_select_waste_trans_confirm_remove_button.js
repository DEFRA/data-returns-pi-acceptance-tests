'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const WasteRemove = require('../../support/pages/WasteTransferDeleteConfirm.page');
const winston = require('winston');
defineStep('I select the waste transfer remove button', function () {
    winston.info('Sectors Object: ');
    WasteRemove.clickWasteRemoveButton();
});
