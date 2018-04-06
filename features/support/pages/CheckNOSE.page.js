'use strict';
const Page = require('./page');

class CheckNosePage extends Page {
    get url () {
        return '/check/nose-summary';
    }

    isNoseSummary () {
        const onTaskList = browser.getHTML('#page-name', false);
        onTaskList.should.equal('nose-summary');
    }
}

module.exports = new CheckNosePage();
