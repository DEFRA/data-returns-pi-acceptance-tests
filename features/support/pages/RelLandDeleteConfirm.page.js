'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class SubTablePage extends Page {
    get url () { return '/releases/land/remove'; }

    onDeleteConfirm () {
        const onSubTablePage = browser.getHTML('#page-name', false);
        console.log(onSubTablePage);
        onSubTablePage.should.equal('confirm-delete');
    }

    clickRemoveButton () {
        console.log('About to click remove button');
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = new SubTablePage();
