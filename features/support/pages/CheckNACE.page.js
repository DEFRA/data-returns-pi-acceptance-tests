'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class CheckNacePage extends Page {
    get url () { return '/check/nace-summary'; }

    isNaceSummary () {
        // const onTaskList = browser.getAttribute('#page-name', 'value'
        const onTaskList = browser.getHTML('#page-name', false);
        console.log(onTaskList);
        // const onTaskList = browser.element('#page-name');
        onTaskList.should.equal('nace-summary');
        this.continue();
    }

}

module.exports = new CheckNacePage();
