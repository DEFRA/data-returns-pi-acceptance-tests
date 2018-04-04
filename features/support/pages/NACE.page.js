'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class NacePage extends Page {
    get url () { return '/nace-code'; }

    isNaceLoggedIn () {
        const onNacePage = browser.getHTML('#page-name', false);
        console.log(onNacePage);
        onNacePage.should.equal('nace');
    }
    naceEnterValue () {
        const input = browser.$('#nace-code');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('20.13');
        console.log(input.getValue()); // outputs: 'test123'
        this.continue();
    }
}

module.exports = new NacePage();
