'use strict';
const {defineStep} = require('cucumber');
const SubmitDetailsPage = require('../../support/pages/SubmitYourData.page');

defineStep('I am on the submit page and click continue', function () {
    SubmitDetailsPage.onCheckData();
    SubmitDetailsPage.clickContinue();
    console.log('Check Data Page');
});
