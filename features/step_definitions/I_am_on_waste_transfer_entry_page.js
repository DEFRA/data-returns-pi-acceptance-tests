'use strict';
const SubTablePage = require('../support/pages/OffSiteTransferWas.page');

module.exports = function () {
    this.defineStep('I am on the waste transfer entry page', function () {
        SubTablePage.onOffSiteWastePage();
        console.log('On the Off-Site waste page');

    });

    // this.defineStep('I select the add substance link', function () {
    //     SubTablePage.clickAddSubstance();
    //     console.log('Click Add Substance');
    //
    // });
};
