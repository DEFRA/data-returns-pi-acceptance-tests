'use strict';
const {defineStep} = require('cucumber');
const ReleasesPageIndex = require('../../support/pages/releases/PageIndex');

/**
 * Confirm removal of a substance (the substance to be removed will have already been specified in a previous step)
 *
 * @param releaseType the title of the releases section. e.g. "Releases to air"
 */
defineStep(/^I confirm removal of substance for "(.*)"$/, function (releaseType) {
    const targetPage = ReleasesPageIndex.getReleasesPage(releaseType, 'delete');
    targetPage.confirmDeleteSubstance();
});
