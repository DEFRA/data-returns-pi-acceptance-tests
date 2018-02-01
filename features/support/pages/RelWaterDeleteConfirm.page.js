'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class WaterSubTablePage extends Page {
    get url () { return '/releases/water/remove'; }

    onWasteWaterDeleteConfirm () {
        const onWaterSubTablePage = browser.getHTML('#page-name', false);
        console.log(onWaterSubTablePage);
        onWaterSubTablePage.should.equal('confirm-delete-water');
    }

    clickWasteWaterRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new WaterSubTablePage();
