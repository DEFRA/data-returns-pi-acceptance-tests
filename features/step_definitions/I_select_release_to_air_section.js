'use strict';
const util = require('util');
const Sectors = require('../support/pages/Sectors.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select release to air section', function () {
        winston.info('Sectors Object: ');
        winston.info(util.inspect(Sectors, {colors: true}));
        Sectors.clickLink(Sectors.links.airconfirm.id);
    });
};
