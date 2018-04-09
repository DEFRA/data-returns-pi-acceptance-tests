'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Check if the given releases page is open
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 * @param pageName the title of the page within the section. e.g. "
 */
defineStep(/^I am on the "(.*)" ([^ ]+) page$/, function (releaseType, pageName) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, pageName);
    targetPage.checkOpen();
});
