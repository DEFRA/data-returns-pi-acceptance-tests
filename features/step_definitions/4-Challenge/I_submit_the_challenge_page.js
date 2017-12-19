'use strict';
const util = require('util');
const AirChallenge = require('../../support/pages/ReleaseToAirChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to air yes radio button', function () {
        winston.info('AirChallenge Object: ');
        winston.info(util.inspect(AirChallenge, {colors: true}));
        AirChallenge.clickRadioButton(AirChallenge.buttons.yesButton.id);

    });

};
