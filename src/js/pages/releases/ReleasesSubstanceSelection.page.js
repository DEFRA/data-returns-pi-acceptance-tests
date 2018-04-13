'use strict';
const Page = require('../page');

class ReleasesSubstanceSelectionPage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    selectNextUnused () {
        const substanceRadioButtons = browser.$$('//input[@name="parameterId"]');
        const nextRadioButton = substanceRadioButtons[0];
        nextRadioButton.click();
    }
}

module.exports = ReleasesSubstanceSelectionPage;
