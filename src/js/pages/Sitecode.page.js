'use strict';
const Page = require('./page');

class SitePage extends Page {
    get url () {
        return '/site';
    }

    onSitePage () {
        const onSite = browser.getHTML('#page-name', false);
        onSite.should.equal('site');
    }
}

module.exports = new SitePage();
