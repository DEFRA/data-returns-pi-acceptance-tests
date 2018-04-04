'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class LandingPage extends Page {
    get url () { return '/'; }

    isLoggedIn () {
        // const onTaskList = browser.getAttribute('#page-name', 'value'
        const onTaskList = browser.getHTML('#page-name', false);
        console.log(onTaskList);
        // const onTaskList = browser.element('#page-name');
        onTaskList.should.equal('start');
    }

    clickLandingLink (referenceNumber) {
        // Find the table row whose first cell contains the referenceNumber
        const referenceNumberCell = browser.element('td=' + referenceNumber);
        const parentRow = referenceNumberCell.element('..');

        // Bit naff but will do for now
        const link = parentRow.element('input');

        waitForNav(() => {
            winston.info(`Clicking the link (id=${link.getAttribute('id')}) for permit ${referenceNumber}`);
            link.click();
        });
    }
}

module.exports = new LandingPage();
