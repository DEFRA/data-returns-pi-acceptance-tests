'use strict';
const Page = require('./page');

class LandingPage extends Page {
    get url () { return '/'; }

    isLoggedIn () {
        const heading = browser.getText('span#title');
        heading.should.equal('Welcome 12@email.com');
    }
}

module.exports = new LandingPage();
