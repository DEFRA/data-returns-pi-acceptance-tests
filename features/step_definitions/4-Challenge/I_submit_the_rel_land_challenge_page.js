'use strict';
const util = require('util');
const LandChallenge = require('../../support/pages/ReleaseToLandChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the release to land yes radio button', function () {
        winston.info('AirChallenge Object: ');
        winston.info(util.inspect(LandChallenge, {colors: true}));
        LandChallenge.clickLandRadioButton(LandChallenge.buttons.yesButton.id);

    });

};
