'use strict';
const {defineStep} = require('cucumber');
const util = require('util');
const AirChallenge = require('../../support/pages/ReleaseToAirChallenge.page');
const winston = require('winston');

defineStep('I select the release to air yes radio button', function () {
    winston.info('AirChallenge Object: ');
    winston.info(util.inspect(AirChallenge, {colors: true}));
    AirChallenge.clickAirRadioButton(AirChallenge.buttons.yesButton.id);

});
defineStep('I select the release to air no radio button', function () {
    winston.info('AirChallenge Object: ');
    winston.info(util.inspect(AirChallenge, {colors: true}));
    AirChallenge.clickAirRadioButton(AirChallenge.buttons.noButton.id);

});
