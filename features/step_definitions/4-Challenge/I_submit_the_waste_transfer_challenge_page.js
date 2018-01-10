'use strict';
const util = require('util');
const WasteChallenge = require('../../support/pages/WasteTransChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the waste transfer yes radio button', function () {
        winston.info('WaterChallenge Object: ');
        winston.info(util.inspect(WasteChallenge, {colors: true}));
        WasteChallenge.clickWasteTransRadioButton(WasteChallenge.buttons.yesButton.id);

    });

};
