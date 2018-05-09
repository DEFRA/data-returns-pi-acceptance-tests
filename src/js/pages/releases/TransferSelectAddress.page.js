'use strict';
const Page = require('../page');

class SelectAddressPage extends Page {
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
}

module.exports = SelectAddressPage;
