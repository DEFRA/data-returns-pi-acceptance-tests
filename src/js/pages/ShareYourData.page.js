'use strict';
const Page = require('./page');

class SharePage extends Page {
    get url () {
        return '/share';
    }

}

module.exports = new SharePage();
