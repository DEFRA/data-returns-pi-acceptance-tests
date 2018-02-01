'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class AirSubTablePage extends Page {
    get url () { return '/releases/air/remove'; }

    onAirDeleteConfirm () {
        const onAirSubTablePage = browser.getHTML('#page-name', false);
        console.log(onAirSubTablePage);
        onAirSubTablePage.should.equal('confirm-delete-air');
    }

    clickAirRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new AirSubTablePage();
