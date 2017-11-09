'use strict';
const Page = require('../pages/page');
class LandPage extends Page {
    get url () { return '/'; }
}
module.exports = new LandPage();
