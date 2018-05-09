'use strict';
const Page = require('./page');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class CheckDataPage extends Page {
    get url () {
        return '/review/confirm';
    }

    clickAccept () {
        const acceptBtn = browser.element('#accept');
        waitForNav(function () {
            acceptBtn.click();
        });
    }
}

module.exports = new CheckDataPage();
