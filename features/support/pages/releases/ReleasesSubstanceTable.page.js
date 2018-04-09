'use strict';
const Page = require('../page');
const waitForNav = require('../../lib/wait-for-navigation-on-action');

class ReleasesSubstanceTablePage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    addSubstance () {
        const link = browser.element(`#add`);
        waitForNav(function () {
            link.click();
        });
    }

    deleteSubstance () {
        const deletelink = browser.element(`.delete`);
        waitForNav(function () {
            deletelink.click();
        });
    }
}

module.exports = ReleasesSubstanceTablePage;
