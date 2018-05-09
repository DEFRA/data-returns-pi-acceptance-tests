'use strict';
const Page = require('./page');

class NacePage extends Page {
    get url () {
        return '/check/nace-code';
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
