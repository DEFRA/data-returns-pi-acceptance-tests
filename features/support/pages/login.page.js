'use strict';
const Page = require('./page');
class LoginPage extends Page {
    get url () { return '/login'; }
}
module.exports = new LoginPage();
