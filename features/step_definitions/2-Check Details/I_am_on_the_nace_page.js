'use strict';
const NacePage = require('../../support/pages/NACE.page');

module.exports = function () {
        this.defineStep('I am on the nace page', function () {
            NacePage.isNaceLoggedIn ();
            console.log('Login page');
        });

        this.defineStep('I enter the nace value', function () {
            NacePage.naceEnterValue();
            console.log('Login page');
        });
};