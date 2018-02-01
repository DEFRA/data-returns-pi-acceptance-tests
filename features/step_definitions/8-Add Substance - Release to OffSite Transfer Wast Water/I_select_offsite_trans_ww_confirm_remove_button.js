'use strict';
const util = require('util');
const WwRemove = require('../../support/pages/RelOffsiteTransWasteWaterDeleteConfirm.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the off-site transfer in water waste substance remove button', function () {
        winston.info('Sectors Object: ');
        WwRemove.clickWaterRemoveButton();
    });
};
