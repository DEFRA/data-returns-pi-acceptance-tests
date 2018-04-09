'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Select a measurement/estimation method fo the given substance and release type
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I enter a "(.*)" substance method/, function (releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'details');
    targetPage.detailSelectMethod();
});
