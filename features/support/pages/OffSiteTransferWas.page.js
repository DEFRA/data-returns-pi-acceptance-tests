'use strict';
const Page = require('./page');

class OffSiteWastePage extends Page {
    get url () {
        return '/off-site';
    }

    onOffSiteWastePage () {
        const onoffSiteWaste = browser.getHTML('#page-name', false);
        onoffSiteWaste.should.equal('offsite');
    }
}

module.exports = new OffSiteWastePage();
