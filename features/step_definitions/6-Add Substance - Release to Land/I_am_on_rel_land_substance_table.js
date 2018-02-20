'use strict';
const AirSubTablePage = require('../../support/pages/RelLandSubstanceTable.page');

module.exports = function () {
    this.defineStep('I am on the release to land substance table', function () {
        AirSubTablePage.onAirSubTable();
        console.log('Substance (air) Table');
    });
    this.defineStep('I select the release to land add substance link', function () {
        AirSubTablePage.clickAddSubstance();
        console.log('Substance (air) Table');
    });
    this.defineStep('I delete a release to land substance', function () {
        AirSubTablePage.clickDelete();
        console.log('Substance (air) Table');
    });
    this.defineStep('I click continue on the release to land substance table', function () {
        AirSubTablePage.continue();
        console.log('Substance (air) Table');
    });

};
