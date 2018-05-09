'use strict';
const Page = require('./page');

class OffSiteWWPage extends Page {
    get url () {
        return '/overseas';
    }

}

module.exports = new OffSiteWWPage();
