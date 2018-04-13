'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class WasteTransferConfirmPage extends Page {
    get url () { return '/releases/off-site/remove'; }

    onWasteDeleteConfirm () {
        const onWasteTransferConfirmPage = browser.getHTML('#page-name', false);
        console.log(onWasteTransferConfirmPage);
        onWasteTransferConfirmPage.should.equal('confirm-delete-off-site');
    }

    clickWasteRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new WasteTransferConfirmPage();
