'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class OffsiteSubTablePage extends Page {
    get url () { return '/releases/water/remove'; }

    onWaterDeleteConfirm () {
        const onOffsiteSubTablePage = browser.getHTML('#page-name', false);
        console.log(onOffsiteSubTablePage);
        onOffsiteSubTablePage.should.equal('confirm-delete-waste-water');
    }

    clickWaterRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new OffsiteSubTablePage();
