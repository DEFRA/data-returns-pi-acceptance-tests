'use strict';
const {defineStep} = require('cucumber');
const AirSubTablePage = require('../../support/pages/RelWaterSubstanceTable.page');

defineStep('I am on the release to water substance table', function () {
    AirSubTablePage.onAirSubTable();
    console.log('Substance (air) Table');
});
defineStep('I select the release to water add substance link', function () {
    AirSubTablePage.clickAddSubstance();
    console.log('Substance (air) Table');
});
defineStep('I delete a release to water substance', function () {
    AirSubTablePage.clickDelete();
    console.log('Substance (air) Table');
});
defineStep('I click continue on the controlled water data table', function () {
    AirSubTablePage.continue();
    console.log('Substance (air) Table');
});
