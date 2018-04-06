'use strict';
const {defineStep} = require('cucumber');
const AirSubTablePage = require('../../support/pages/RelOffsiteTransWasteWaterSubstanceTable.page');

defineStep('I am on the off-site transfer in water waste substance table', function () {
    AirSubTablePage.onAirSubTable();
    console.log('Substance (air) Table');
});
defineStep('I select the off-site transfer in water waste add substance link', function () {
    AirSubTablePage.clickAddSubstance();
    console.log('Substance (air) Table');
});
defineStep('I delete a off-site transfer in water waste substance', function () {
    AirSubTablePage.clickDelete();
    console.log('Substance (air) Table');
});
defineStep('I click continue on the water waste data table', function () {
    AirSubTablePage.clickDelete();
    console.log('Substance (air) Table');
});
