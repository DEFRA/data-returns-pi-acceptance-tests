'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class LandingPage extends Page {
    get url () {
        return '/';
    }

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

    /**
     * Retrieve the first permit for the given type of submission and required status
     *
     * @param {string} submissionType the type of submission that the returned permit should belong to, e.g. 'Pollution inventory reporting' or 'Pollution Inventory reporting for EPRTR'
     * @param {string} status the required status for the returned permit, e.g. 'Submitted' - tests the permit table status column for the given text
     * @returns {string|String|String[]|*} the permit number for the given conditions
     */
    getFirstPermitWithStatus (submissionType, status) {
        const permitTable = browser.element(`//h2[normalize-space() = "${submissionType}"]//following-sibling::table[1]`);
        if (!permitTable.isExisting()) {
            const err = new Error(`Unable to find permit table for ${submissionType}`);
            winston.error(err);
            throw err;
        }
        const firstRowWithEmptyStatusCell = permitTable.element(`./tbody/tr[normalize-space(td[3]) = "${status}"]`);
        return firstRowWithEmptyStatusCell.element('.//td[1]').getText();
    }

    getFirstUnsubmittedPermit (submissionType) {
        return this.getFirstPermitWithStatus(submissionType, '');
    }

    getFirstSubmittedPermit (submissionType) {
        return this.getFirstPermitWithStatus(submissionType, 'Submitted');
    }

    getFirstOpenedPermit (submissionType) {
        return this.getFirstPermitWithStatus(submissionType, 'Open');
    }
}

module.exports = new LandingPage();
