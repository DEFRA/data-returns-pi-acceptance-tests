'use strict';
const util = require('util');
const Sectors = require('../../support/pages/Sectors.page');
const winston = require('winston');

module.exports = function () {
    this.defineStep('I am on all sectors page', function () {
        Sectors.onAllSectors();
        console.log('All Sectors Page');

    });
};
