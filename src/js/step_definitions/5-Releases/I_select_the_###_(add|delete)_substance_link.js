'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../pages/releases/PageIndex');

/**
 * Select the add substance link on the substances table for the given release type.
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 * @param linkType the type of link to click (either add or delete)
 */
defineStep(/^I select the "(.*)" (add|delete) substance link$/, function (releaseType, linkType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'substances');

    if (linkType === 'add') {
        targetPage.addSubstance();
    } else if (linkType === 'delete') {
        targetPage.deleteSubstance();
    } else {
        throw new Error('Unrecognised action on substances table');
    }
});
