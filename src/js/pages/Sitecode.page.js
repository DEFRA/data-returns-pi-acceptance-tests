'use strict';
const Page = require('./page');

class SitePage extends Page {
    get url () {
        return '/site';
    }

}

module.exports = new SitePage();
