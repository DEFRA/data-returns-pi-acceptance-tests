'use strict';
const Page = require('./page');


class ContactPage extends Page {
    get url () { return '/contact'; }

    onContactPage () {
        const onContact = browser.getHTML('#page-name',false);
            onContact.should.equal('contact');

    }
}

module.exports = new ContactPage();
