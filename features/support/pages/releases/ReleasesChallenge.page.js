'use strict';
const Page = require('../page');

/**
 * Releases challenge page (the overall yes/no selection for releases to a particular route)
 */
class ReleasesChallengePage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    setHasReleases (hasReleases = true) {
        if (hasReleases) {
            browser.click('#radio-1');
        } else {
            browser.click('#radio-2');
        }
    }
}

module.exports = ReleasesChallengePage;
