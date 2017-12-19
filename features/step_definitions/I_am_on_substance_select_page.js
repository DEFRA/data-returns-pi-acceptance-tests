'use strict';
const SubSelectPage = require('../support/pages/SubstanceSelect.page');


module.exports = function () {
    this.defineStep('I am on the substance select page', function () {
        SubSelectPage.onSubSelect();
        console.log('Substance Select Page');

    });

    this.defineStep('I select a substance', function () {
            SubSelectPage.selectNextUnused();
            console.log('Click required Substance');
            SubSelectPage.continue()

    });
};