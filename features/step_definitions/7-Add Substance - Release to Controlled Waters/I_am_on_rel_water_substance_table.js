'use strict';
const AirSubTablePage = require('../../support/pages/RelWaterSubstanceTable.page');

module.exports = function () {
    this.defineStep('I am on the release to water substance table', function () {
        AirSubTablePage.onAirSubTable();
        console.log('Substance (air) Table');
    });
    this.defineStep('I select the release to water add substance link', function () {
        AirSubTablePage.clickAddSubstance();
        console.log('Substance (air) Table');
    });
    this.defineStep('I delete a release to water substance', function () {
        AirSubTablePage.clickDelete();
        console.log('Substance (air) Table');
    });
};