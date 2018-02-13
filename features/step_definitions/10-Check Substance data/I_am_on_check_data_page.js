'use strict';
const CheckDetailsPage = require('../../support/pages/CheckYourData.page');

module.exports = function () {
    this.defineStep('I am on the check data page and click accept', function () {
        CheckDetailsPage.onCheckData();
        CheckDetailsPage.clickAccept();
        console.log('Check Data Page');

    });

};