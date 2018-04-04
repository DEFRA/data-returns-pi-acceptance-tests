'use strict';
const util = require('util');
const winston = require('winston');
const LandingPage = require('../../support/pages/Landing.page');


module.exports = function () {

    this.defineStep('I continue to all sectors', function () {
        console.log('Login page');
        LandingPage.open();
        LandingPage.checkOpen();
        LandingPage.isLoggedIn();
    });

    this.defineStep('I select an unopen permit', function () {
        console.log('Login page');
        LandingPage.open();
        LandingPage.checkOpen();
        winston.info('LandingPage Object: ');
        winston.info(util.inspect(LandingPage, {colors: true}));
        LandingPage.clickLandingLink('42355');
    });

    this.defineStep('I select an unsubmitted permit', function () {
        console.log('Login page');
        LandingPage.open();
        LandingPage.checkOpen();
        winston.info('LandingPage Object: ');
        winston.info(util.inspect(LandingPage, {colors: true}));
        LandingPage.clickLandingLink('42355');
    });

    this.defineStep('I select a submitted permit', function () {
        console.log('Login page');
        LandingPage.open();
        LandingPage.checkOpen();
        winston.info('LandingPage Object: ');
        winston.info(util.inspect(LandingPage, {colors: true}));
        LandingPage.clickLandingLink('42355');
    });

};