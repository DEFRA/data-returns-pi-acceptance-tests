'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class NosePage extends Page {
    get url () { return '/nose-code'; }

    isNoseLoggedIn () {
        // const onTaskList = browser.getAttribute('#page-name', 'value'
        const onNosePage = browser.getHTML('#page-name', false);
        console.log(onNosePage);
        // const onNosePage = browser.element('#page-name');
        onNosePage.should.equal('nose');
    }
    noseEnterValue () {
        const input = browser.$('#nose-code');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('105.08');
        console.log(input.getValue()); // outputs: 'test123'
        this.continue();
    }
}

module.exports = new NosePage();
