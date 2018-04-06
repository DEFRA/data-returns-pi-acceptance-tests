'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const Sectors = require('../../support/pages/Sectors.page');
const winston = require('winston');
defineStep('I select overseas waste transfer section', function () {
    winston.info('Sectors Object: ');
    winston.info(util.inspect(Sectors, {colors: true}));
    Sectors.clickLink(Sectors.links.overseas.id);
});
