'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const WaterRemove = require('../../support/pages/RelWaterDeleteConfirm.page');
const winston = require('winston');

defineStep('I select the release to water substance remove button', function () {
    winston.info('Sectors Object: ');
    WaterRemove.clickWasteWaterRemoveButton();
});
