'use strict';
const Page = require('./page');


class OffSiteWWPage extends Page {
    get url () { return '/overseas'; }

    onOffSiteWWPage () {
        const onOffSiteWW = browser.getHTML('#page-name',false);
        console.log(onOffSiteWW);
        onOffSiteWW.should.equal('overseas');
    }
}

}

module.exports = new OffSiteWWPage();
