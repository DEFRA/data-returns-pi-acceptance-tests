'use strict';
const Page = require('./page');

class NacePage extends Page {
    get url () {
        return '/nace-code';
    }

    isNaceLoggedIn () {
        const onNacePage = browser.getHTML('#page-name', false);
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
