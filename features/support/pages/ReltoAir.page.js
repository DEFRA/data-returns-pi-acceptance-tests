'use strict';
const Page = require('./page');

class RelToAirPage extends Page {
    get url () { return '/air-confirm'; }

    onRelToAirPage () {
        const onRelToAir = browser.getHTML('#page-name',false);
        console.log(onRelToAir);
        onRelToAir.should.equal('releases');
    }
}

module.exports = new RelToAirPage();
