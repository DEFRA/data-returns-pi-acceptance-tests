'use strict';
const util = require('util');
const Remove = require('../../support/pages/DeleteConfirm.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the remove button', function () {
        winston.info('Sectors Object: ');
        Remove.clickRemoveButton();
    });
};
