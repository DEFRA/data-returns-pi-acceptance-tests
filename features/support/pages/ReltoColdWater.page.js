'use strict';
const Page = require('./page');

class RelConWatPage extends Page {
    get url () { return '/water-confirm'; }

    onRelConWatPage () {
        const onRelConWat = browser.getHTML('#page-name', false);
        console.log(onRelConWat);
        onRelConWat.should.equal('releases');
    }
}

module.exports = new RelConWatPage();
