'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class WasteTransferTablePage extends Page {
    get url () {
        return '/transfers/waste';
    }

    clickAddWaste () {
        console.log('About to click add waste');
        const link = browser.element(`#add`);
        waitForNav(function () {
            link.click();
        });
    }

    clickDelete () {
        console.log('About to click Delete');
        const deletelink = browser.element('#delete');
        waitForNav(function () {
            deletelink.click();
        });
    }
}

module.exports = new WasteTransferTablePage();
