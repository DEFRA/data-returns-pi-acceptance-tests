'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class NosePage extends Page {
    get url () { return '/check/nose-code'; }

    noseEnterValue () {
        const input = browser.$('#nose-code');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('105.08');
        console.log(input.getValue()); // outputs: 'test123'
        this.continue();
    }
}

module.exports = new NosePage();
