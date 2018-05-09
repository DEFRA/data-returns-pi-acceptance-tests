'use strict';
const {defineStep} = require('cucumber');
const CheckDetailsPage = require('../../pages/CheckYourData.page');

defineStep('I am on the check data page and click accept', function () {
    CheckDetailsPage.open();
    CheckDetailsPage.checkOpen();
    CheckDetailsPage.clickAccept();
    console.log('Check Data Page');

});
