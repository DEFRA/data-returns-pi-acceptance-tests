'use strict';
const Page = require('../page');

class SubstanceDetailsPage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    detailEnterValue () {
        var input = browser.$('#value');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('2345');
        console.log(input.getValue()); // outputs: 'test123'
    }

    detailSelectUnit () {
        // const unitValue = 'Bq';
        // const primaryValue = 'unit';

        const selectUnit = browser.$('#unit');
        console.log('>>>>>>>' + JSON.stringify(selectUnit));

        selectUnit.selectByValue('139       ');
        console.log(selectUnit.getValue());
    }

    detailSelectMethod () {
        // const unitValue = 'Bq';
        // const primaryValue = 'unit';

        const selectUnit = browser.$('#method');
        console.log('>>>>>>>' + JSON.stringify(selectUnit));

        selectUnit.selectByValue('3');
        console.log(selectUnit.getValue());
    }
}

module.exports = SubstanceDetailsPage;
