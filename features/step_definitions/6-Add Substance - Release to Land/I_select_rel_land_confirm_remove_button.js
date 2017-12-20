'use strict';
const util = require('util');
const Remove = require('../../support/pages/RelLandDeleteConfirm.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to land substance remove button', function () {
        winston.info('Sectors Object: ');
        Remove.clickRemoveButton();
    });
};
