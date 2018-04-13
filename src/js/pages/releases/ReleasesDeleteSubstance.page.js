'use strict';
const Page = require('../page');
const waitForNav = require('../../lib/wait-for-navigation-on-action');

class ReleasesDeleteSubstancePage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    /**
     * Confirm deletion of the substance
     */
    confirmDeleteSubstance () {
        const removeBtn = browser.element(`#removeBtn`);
        waitForNav(function () {
            removeBtn.click();
        });
    }
}

module.exports = ReleasesDeleteSubstancePage;
