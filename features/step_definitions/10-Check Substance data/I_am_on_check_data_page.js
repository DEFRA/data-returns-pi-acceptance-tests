'use strict';
const {defineStep} = require('cucumber');
const CheckDetailsPage = require('../../support/pages/CheckYourData.page');

defineStep('I am on the check data page and click accept', function () {
    CheckDetailsPage.onCheckData();
    CheckDetailsPage.clickAccept();
    console.log('Check Data Page');

});
