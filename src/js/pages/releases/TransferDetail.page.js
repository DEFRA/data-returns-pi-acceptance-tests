'use strict';
const Page = require('../page');

class AddWasteDetailPage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    detailEnterWasteValue () {
        var input = browser.$('#value');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('2345');
        console.log(input.getValue()); // outputs: 'test123'
    }
}

module.exports = AddWasteDetailPage;
