'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Click continue on the substance table for the given release type.
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I click continue on the "(.*)" substance table$/, function (releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'substances');
    targetPage.continue();
});
