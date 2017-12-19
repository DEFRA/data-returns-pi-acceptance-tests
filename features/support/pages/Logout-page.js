'use strict';
const Page = require('./page');

class LoginPage extends Page {
    get url () {
        return '/login';
    }
    submitLogout () {
        browser.url('/logout');
    }
}

module.exports = new LoginPage();
