'use strict';
const Page = require('./page');

class RelToLandPage extends Page {
    get url () { return '/land-confirm'; }

    onRelToLandPage () {
        const onRelToLand = browser.getHTML('#page-name', false);
        console.log(onRelToLand);
        onRelToLand.should.equal('releases');
    }
}

module.exports = new RelToLandPage();
