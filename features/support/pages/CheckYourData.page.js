'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class CheckDataPage extends Page {
    get url () { return '/check'; }

    onCheckData () {
        const onCheck = browser.getHTML('#page-name', false);
        console.log(onCheck);
        onCheck.should.equal('review');
    }
    clickAccept () {
        const acceptBtn = browser.element('#accept');
        waitForNav(function () {
            acceptBtn.click();
        });
    }
}

module.exports = new CheckDataPage();
