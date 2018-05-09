'use strict';
const {defineStep} = require('cucumber');
const SubmitDetailsPage = require('../../pages/SubmitYourData.page');

defineStep('I am on the submit page and click continue', function () {
    SubmitDetailsPage.open();
    SubmitDetailsPage.checkOpen();
    SubmitDetailsPage.clickContinue();
    console.log('Check Data Page');
});
