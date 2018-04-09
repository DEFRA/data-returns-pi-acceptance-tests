'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Select a unit for the given substance and release type
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I enter a "(.*)" substance unit/, function (releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'details');
    targetPage.detailSelectUnit();
});
