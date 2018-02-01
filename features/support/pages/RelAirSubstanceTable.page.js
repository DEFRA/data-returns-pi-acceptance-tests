'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class SubTablePage extends Page {
    get url () { return '/releases/air'; }

    onAirSubTable () {
        const onSubTablePage = browser.getHTML('#page-name', false);
        console.log(onSubTablePage);
        onSubTablePage.should.equal('releases-air');
    }

    clickAddSubstance () {
        console.log('About to click add substance');
        const link = browser.element(`#add`);
        waitForNav(function () {
            link.click();
        });
    }

    clickDelete () {
        console.log('About to click Delete');
        const deletelink = browser.element(`.delete`);
        waitForNav(function () {
            deletelink.click();
        });
    }
}

module.exports = new SubTablePage();
