'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const LandRemove = require('../../support/pages/RelLandDeleteConfirm.page');
const winston = require('winston');
defineStep('I select the release to land substance remove button', function () {
    winston.info('Sectors Object: ');
    LandRemove.clickLandRemoveButton();
});
