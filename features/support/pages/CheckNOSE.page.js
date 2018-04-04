'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class CheckNosePage extends Page {
    get url () { return '/check/nose-summary'; }

    isNoseSummary() {
        // const onTaskList = browser.getAttribute('#page-name', 'value'
        const onTaskList = browser.getHTML('#page-name', false);
        console.log(onTaskList);
        // const onTaskList = browser.element('#page-name');
        onTaskList.should.equal('nose-summary');
        this.continue();
    }

}

module.exports = new CheckNosePage();
