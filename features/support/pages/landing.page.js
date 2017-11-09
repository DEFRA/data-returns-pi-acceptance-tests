'use strict';
const Page = require('./page');
class LandPage extends Page {
    get url () { return '/'; }
}
module.exports = new LandPage();
