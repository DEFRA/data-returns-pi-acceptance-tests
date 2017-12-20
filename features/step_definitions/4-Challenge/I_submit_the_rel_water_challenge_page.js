'use strict';
const util = require('util');
const AirChallenge = require('../../support/pages/ReleaseToWaterChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to water yes radio button', function () {
        winston.info('AirChallenge Object: ');
        winston.info(util.inspect(AirChallenge, {colors: true}));
        AirChallenge.clickWaterRadioButton(AirChallenge.buttons.yesButton.id);

    });

};
