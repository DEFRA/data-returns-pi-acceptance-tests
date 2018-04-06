'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const WwRemove = require('../../support/pages/RelOffsiteTransWasteWaterDeleteConfirm.page');
const winston = require('winston');

defineStep('I select the off-site transfer in water waste substance remove button', function () {
    winston.info('Sectors Object: ');
    WwRemove.clickWaterRemoveButton();
});
