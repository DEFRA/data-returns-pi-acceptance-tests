'use strict';
const Page = require('./page');

class CheckNacePage extends Page {
    get url () {
        return '/check/nace-summary';
    }

    isNaceSummary () {
        const onTaskList = browser.getHTML('#page-name', false);
        onTaskList.should.equal('nace-summary');
    }
}

module.exports = new CheckNacePage();
