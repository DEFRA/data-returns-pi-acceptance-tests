'use strict';
const NosePage = require('../../support/pages/NOSE.page');

module.exports = function () {
        this.defineStep('I am on the nose page', function () {
            NosePage.isNoseLoggedIn();
            console.log('Login page');
        });

        this.defineStep('I enter the nose value', function () {
            NosePage.noseEnterValue();
            console.log('Login page');
        });
};