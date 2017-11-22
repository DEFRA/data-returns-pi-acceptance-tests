'use strict';
const Page = require('./page');


class OffSiteWWPage extends Page {
    get url () { return '/waste-water-confirm'; }

    onOffSiteWWPage () {
        const onOffSiteWW = browser.getHTML('#page-name',false);
        console.log(onOffSiteWW);
        onOffSiteWW.should.equal('releases');
    }
}

}

module.exports = new OffSiteWWPage();
