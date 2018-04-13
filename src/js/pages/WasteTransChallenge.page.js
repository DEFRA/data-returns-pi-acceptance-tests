'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

/*
landing.clickLink(check)
 */

class WasteTransChallengePage extends Page {
    get buttons () {
        return {
            yesButton: {
                id: '#radio-1'
            },
            noButton: {
                id: '#radio-2'
            }
        };
    }

    get url () {
        return '/transfers/off-site/confirm';
    }

    onWasteTransChallenge () {
        const onChallengePage = browser.getHTML('#page-name', false);
        onChallengePage.should.equal('confirm-off-site');
    }

    clickWasteTransRadioButton (buttonSelector) {
        if (buttonSelector && browser.isExisting(buttonSelector)) {
            waitForNav(() => {
                winston.info('Clicking the link ' + buttonSelector);
                browser.click(buttonSelector);
                this.continue();
            });
        } else {
            console.log(browser.getHTML('#content'));
            winston.error('Unable to find link in Sector.page.clickLink()');
            throw new Error('Unknown Sector link');
        }
    }
}

module.exports = new WasteTransChallengePage();
