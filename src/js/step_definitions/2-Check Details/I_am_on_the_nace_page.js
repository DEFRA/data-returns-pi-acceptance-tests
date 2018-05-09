'use strict';
const {defineStep} = require('cucumber');
const NacePage = require('../../pages/NACE.page');

defineStep('I am on nace page', function () {
    NacePage.open();
    NacePage.checkOpen();
});

defineStep('I enter the nace value', function () {
    NacePage.naceEnterValue();
});
