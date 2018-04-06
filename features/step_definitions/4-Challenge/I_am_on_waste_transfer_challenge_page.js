'use strict';
const {defineStep} = require('cucumber');
const WasteTransPage = require('../../support/pages/WasteTransChallenge.page');

defineStep('I am on the waste transfer challenge page', function () {
    WasteTransPage.onWasteTransChallenge();
    console.log('Challenge Page');

});
