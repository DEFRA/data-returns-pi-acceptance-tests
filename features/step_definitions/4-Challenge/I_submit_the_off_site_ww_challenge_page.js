'use strict';
const util = require('util');
const OffChallenge = require('../../support/pages/ReleaseToOffsiteWasteWaterChallenge.page');
const winston = require('winston');
module.exports = function () {
    this.defineStep('I select the off-site transfer in ww yes radio button', function () {
        winston.info('OffSiteChallenge Object: ');
        winston.info(util.inspect(OffChallenge, {colors: true}));
        OffChallenge.clickOffsiteWWRadioButton(OffChallenge.buttons.yesButton.id);
    });

    this.defineStep('I select the off-site transfer in ww no radio button', function () {
        winston.info('OffSiteChallenge Object: ');
        winston.info(util.inspect(OffChallenge, {colors: true}));
        OffChallenge.clickOffsiteWWRadioButton(OffChallenge.buttons.noButton.id);
    });
};
