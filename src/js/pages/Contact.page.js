'use strict';
const Page = require('./page');


class ContactPage extends Page {
    get url () { return '/contact'; }

}

module.exports = new ContactPage();
