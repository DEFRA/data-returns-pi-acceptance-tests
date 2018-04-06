'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const LandChallenge = require('../../support/pages/ReleaseToLandChallenge.page');
const winston = require('winston');

defineStep('I select the release to land yes radio button', function () {
    winston.info('AirChallenge Object: ');
    winston.info(util.inspect(LandChallenge, {colors: true}));
    LandChallenge.clickLandRadioButton(LandChallenge.buttons.yesButton.id);

});
defineStep('I select the release to land no radio button', function () {
    winston.info('AirChallenge Object: ');
    winston.info(util.inspect(LandChallenge, {colors: true}));
    LandChallenge.clickLandRadioButton(LandChallenge.buttons.noButton.id);

});
