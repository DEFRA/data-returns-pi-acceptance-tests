'use strict';
const Page = require('./page');


class OffSiteWastePage extends Page {
    get url () { return '/off-site'; }

    onOffSiteWastePage () {
        const onoffSiteWaste = browser.getHTML('#page-name',false);
        console.log(onoffSiteWaste);
        onoffSiteWaste.should.equal('offsite');
    }
  }

}

module.exports = new OffSiteWastePage();
