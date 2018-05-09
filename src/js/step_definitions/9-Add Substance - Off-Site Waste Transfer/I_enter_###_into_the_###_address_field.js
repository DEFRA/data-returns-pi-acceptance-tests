'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../pages/releases/PageIndex');

/**
 * Enter a value into given address field
 *
 * e.g.
 *   - I enter "1 Acorn close" into the "Address line 1" destination address field
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I enter "(.*)" into the "(.*)" (business|destination) address field$/, function (fieldValue, fieldName, addressType) {
    const targetPageId = addressType + '-address';
    const targetPage = ReleasesPageIndex.getReleasesPage('Waste Transfer', targetPageId);
    targetPage.setFieldValue(fieldName, fieldValue);
});
