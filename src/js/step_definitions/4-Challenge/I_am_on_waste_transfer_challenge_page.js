'use strict';
const {defineStep} = require('cucumber');
const WasteTransPage = require('../../pages/WasteTransChallenge.page');

defineStep('I am on the waste transfer challenge page', function () {
    WasteTransPage.open();
    WasteTransPage.checkOpen();
    console.log('Challenge Page');

});
