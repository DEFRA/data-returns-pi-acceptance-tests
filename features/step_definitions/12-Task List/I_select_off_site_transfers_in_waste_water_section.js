'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const Sectors = require('../../support/pages/Sectors.page');
const winston = require('winston');
defineStep('I select off-site transfer in water waste section', function () {
    winston.info('Sectors Object: ');
    winston.info(util.inspect(Sectors, {colors: true}));
    Sectors.clickLink(Sectors.links.wwconfirm.id);
});
