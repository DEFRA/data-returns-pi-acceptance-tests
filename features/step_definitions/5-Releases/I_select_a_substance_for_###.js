'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Select the next available substance for the given release type
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I select a substance for "(.*)"$/, function (releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'selection');
    targetPage.selectNextUnused();
    targetPage.continue();
});
