'use strict';
const util = require('util');
const WaterRemove = require('../../support/pages/RelWaterDeleteConfirm.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to water substance remove button', function () {
        winston.info('Sectors Object: ');
        WaterRemove.clickWasteWaterRemoveButton();
    });
};
