'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const Sectors = require('../../support/pages/Sectors.page');
const winston = require('winston');

defineStep('I am on all sectors page', function () {
    Sectors.onAllSectors();
    console.log('All Sectors Page');
});
