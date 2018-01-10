'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class WasteTransferTablePage extends Page {
    get url () { return '/releases/off-site/remove'; }

    onDeleteConfirm () {
        const onWasteTransferTablePage = browser.getHTML('#page-name', false);
        console.log(onWasteTransferTablePage);
        onWasteTransferTablePage.should.equal('confirm-delete-off-site');
    }

    clickRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new WasteTransferTablePage();
