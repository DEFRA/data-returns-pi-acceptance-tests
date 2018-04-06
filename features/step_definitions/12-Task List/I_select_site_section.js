'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const Sectors = require('../../support/pages/Sectors.page');
const winston = require('winston');
defineStep('I select site section', function () {
    winston.info('Sectors Object: ');
    winston.info(util.inspect(Sectors, {colors: true}));
    Sectors.clickLink(Sectors.links.site.id);
});
