'use strict';
const util = require('util');
const WaterChallenge = require('../../support/pages/ReleaseToWaterChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to water yes radio button', function () {
        winston.info('WaterChallenge Object: ');
        winston.info(util.inspect(WaterChallenge, {colors: true}));
        WaterChallenge.clickWaterRadioButton(WaterChallenge.buttons.yesButton.id);

    });

};
