'use strict';
const Page = require('./page');

class OffSiteWastePage extends Page {
    get url () {
        return '/off-site';
    }
}

module.exports = new OffSiteWastePage();
