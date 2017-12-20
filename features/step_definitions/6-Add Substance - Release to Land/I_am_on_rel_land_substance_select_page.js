'use strict';
const SubSelectPage = require('../../support/pages/RelLandSubstanceSelect.page');


module.exports = function () {
    this.defineStep('I am on the release to land substance select page', function () {
        SubSelectPage.onSubSelect();
        console.log('Substance Select Page');

    });

    this.defineStep('I select an release to land substance', function () {
            SubSelectPage.selectNextUnused();
            console.log('Click required Substance');
            SubSelectPage.continue()

    });
};
