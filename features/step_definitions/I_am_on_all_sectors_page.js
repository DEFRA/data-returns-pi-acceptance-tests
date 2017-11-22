'use strict';
const SectorsPage = require('../support/pages/Sectors.page');

module.exports = function () {
    this.defineStep('I am on all sectors page', function () {
        SectorsPage.onAllSectors();
        console.log('All Sectors Page');

    });
};
