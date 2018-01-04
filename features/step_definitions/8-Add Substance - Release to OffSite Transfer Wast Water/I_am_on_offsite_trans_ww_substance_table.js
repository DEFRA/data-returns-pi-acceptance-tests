'use strict';
const AirSubTablePage = require('../../support/pages/RelOffsiteTransWasteWaterSubstanceTable.page');

module.exports = function () {
    this.defineStep('I am on the off-site transfer in water waste substance table', function () {
        AirSubTablePage.onAirSubTable();
        console.log('Substance (air) Table');
    });
    this.defineStep('I select the off-site transfer in water waste add substance link', function () {
        AirSubTablePage.clickAddSubstance();
        console.log('Substance (air) Table');
    });
    this.defineStep('I delete a off-site transfer in water waste substance', function () {
        AirSubTablePage.clickDelete();
        console.log('Substance (air) Table');
    });
};