'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class LandSubTablePage extends Page {
    get url () { return '/releases/land/remove'; }

    onLandDeleteConfirm () {
        const onLandSubTablePage = browser.getHTML('#page-name', false);
        console.log(onLandSubTablePage);
        onLandSubTablePage.should.equal('confirm-delete-land');
    }

    clickLandRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new LandSubTablePage();
