'use strict';
const Page = require('../page');

class AddAddressPage extends Page {
    constructor (url) {
        super();
        this._url = url;
    }

    get url () {
        return this._url;
    }

    /**
     * Given the title text and a value, sets the value into the appropriate field
     * @param fieldTitle
     * @param fieldValue
     */
    setFieldValue(fieldTitle, fieldValue) {

        let fieldLabel = browser.$(`label=${fieldTitle}`);
        let formField = fieldLabel.$('following-sibling::*[self::select|self::input]');
        formField.setValue(fieldValue);
    }
    addCountry () {
        // const unitValue = 'Bq';
        // const primaryValue = 'unit';

        const selectUnit = browser.$('#country');
        console.log('>>>>>>>' + JSON.stringify(selectUnit));

        selectUnit.selectByValue('United Kingdom');
        console.log(selectUnit.getValue());
    }
}

module.exports = AddAddressPage;
