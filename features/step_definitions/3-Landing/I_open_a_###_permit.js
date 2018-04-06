'use strict';
const {defineStep} = require('cucumber');
const winston = require('winston');
const LandingPage = require('../../support/pages/Landing.page');
defineStep('I continue to all sectors', function () {
    LandingPage.open();
    LandingPage.checkOpen();
    LandingPage.isLoggedIn();
});

defineStep(/^I open the submission for permit (\w+)$/, function (permitToUse) {
    LandingPage.open();
    LandingPage.checkOpen();
    LandingPage.clickLandingLink(permitToUse);
});

defineStep('I select an unsubmitted permit', function () {
    LandingPage.open();
    LandingPage.checkOpen();
    const permitToUse = LandingPage.getFirstUnsubmittedPermit('Pollution Inventory reporting');
    winston.info(`Using permit ${permitToUse}`);
    LandingPage.clickLandingLink(permitToUse);
});

defineStep('I select a previously opened permit', function () {
    LandingPage.open();
    LandingPage.checkOpen();
    const permitToUse = LandingPage.getFirstOpenedPermit('Pollution Inventory reporting');
    winston.info(`Using permit ${permitToUse}`);
    LandingPage.clickLandingLink(permitToUse);
});

defineStep('I select a submitted permit', function () {
    LandingPage.open();
    LandingPage.checkOpen();
    const permitToUse = LandingPage.getFirstSubmittedPermit('Pollution Inventory reporting');
    winston.info(`Using permit ${permitToUse}`);
    LandingPage.clickLandingLink(permitToUse);
});
