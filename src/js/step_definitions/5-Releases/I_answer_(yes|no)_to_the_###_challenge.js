'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../pages/releases/PageIndex');

/**
 * Answer yes or no to the releases challenge page for the given release type.
 *
 * @param status the challenge status response (yes or no)
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I answer (yes|no) to the "(.*)" challenge$/, function (status, releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'challenge');
    const statusBool = status === 'yes';
    targetPage.setHasReleases(statusBool);
    targetPage.continue();
});
