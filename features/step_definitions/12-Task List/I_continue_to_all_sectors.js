'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const winston = require('winston');
const LandingPage = require('../../support/pages/Landing.page');
defineStep('I continue to all sectors', function () {
    console.log('Login page');
    LandingPage.open();
    LandingPage.checkOpen();
    LandingPage.isLoggedIn();
});

defineStep('I select an unopen permit', function () {
    console.log('Login page');
    LandingPage.open();
    LandingPage.checkOpen();
    winston.info('LandingPage Object: ');
    winston.info(util.inspect(LandingPage, {colors: true}));
    LandingPage.clickLandingLink('42355');
});

defineStep('I select an unsubmitted permit', function () {
    console.log('Login page');
    LandingPage.open();
    LandingPage.checkOpen();
    winston.info('LandingPage Object: ');
    winston.info(util.inspect(LandingPage, {colors: true}));
    LandingPage.clickLandingLink('42355');
});

defineStep('I select a submitted permit', function () {
    console.log('Login page');
    LandingPage.open();
    LandingPage.checkOpen();
    winston.info('LandingPage Object: ');
    winston.info(util.inspect(LandingPage, {colors: true}));
    LandingPage.clickLandingLink('42355');
});
