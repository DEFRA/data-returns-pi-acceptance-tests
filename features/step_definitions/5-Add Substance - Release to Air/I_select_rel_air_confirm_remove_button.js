'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const AirRemove = require('../../support/pages/RelAirDeleteConfirm.page');
const winston = require('winston');

defineStep('I select the release to air substance remove button', function () {
    winston.info('Sectors Object: ');
    AirRemove.clickAirRemoveButton();
});
