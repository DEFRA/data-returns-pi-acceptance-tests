'use strict';
const SubmitDetailsPage = require('../../support/pages/SubmitYourData.page');


module.exports = function () {
    this.defineStep('I am on the submit page and click continue', function () {
        SubmitDetailsPage.onCheckData();
        SubmitDetailsPage.clickContinue();
        console.log('Check Data Page');

    });
};