'use strict';
const AirSubTablePage = require('../../support/pages/RelAirSubstanceTable.page');

module.exports = function () {
    this.defineStep('I am on the release to air substance table', function () {
        AirSubTablePage.onAirSubTable();
        console.log('Substance (air) Table');
    });
    this.defineStep('I select the add substance link', function () {
        AirSubTablePage.clickAddSubstance();
        console.log('Substance (air) Table');
    });
    this.defineStep('I delete a substance', function () {
        AirSubTablePage.clickDelete();
        console.log('Substance (air) Table');
    });

};