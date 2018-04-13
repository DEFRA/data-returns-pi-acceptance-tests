'use strict';
const ReleasesChallengePage = require('./ReleasesChallenge.page');
const ReleasesSubstanceTablePage = require('./ReleasesSubstanceTable.page');
const ReleasesSubstanceSelectionPage = require('./ReleasesSubstanceSelection.page');
const ReleasesDetailsPage = require('./ReleasesSubstanceDetails.page');
const ReleasesDeletePage = require('./ReleasesDeleteSubstance.page');

module.exports = {
    'index': {
        'Releases to air': {
            'substances': new ReleasesSubstanceTablePage('/releases/air'),
            'selection': new ReleasesSubstanceSelectionPage('/releases/air/add-substance'),
            'details': new ReleasesDetailsPage('/releases/air/detail'),
            'challenge': new ReleasesChallengePage('/releases/air/confirm'),
            'delete': new ReleasesDeletePage('/releases/air/remove')
        },
        'Releases to land': {
            'substances': new ReleasesSubstanceTablePage('/releases/land'),
            'selection': new ReleasesSubstanceSelectionPage('/releases/land/add-substance'),
            'details': new ReleasesDetailsPage('/releases/land/detail'),
            'challenge': new ReleasesChallengePage('/releases/land/confirm'),
            'delete': new ReleasesDeletePage('/releases/land/remove')
        },
        'Releases to controlled waters': {
            'substances': new ReleasesSubstanceTablePage('/releases/water'),
            'selection': new ReleasesSubstanceSelectionPage('/releases/water/add-substance'),
            'details': new ReleasesDetailsPage('/releases/water/detail'),
            'challenge': new ReleasesChallengePage('/releases/water/confirm'),
            'delete': new ReleasesDeletePage('/releases/water/remove')
        },
        'Off-site transfers in wastewater': {
            'substances': new ReleasesSubstanceTablePage('/releases/waste-water'),
            'selection': new ReleasesSubstanceSelectionPage('/releases/waste-water/add-substance'),
            'details': new ReleasesDetailsPage('/releases/waste-water/detail'),
            'challenge': new ReleasesChallengePage('/releases/waste-water/confirm'),
            'delete': new ReleasesDeletePage('/releases/waste-water/remove')
        }
    },

    getReleasesPage: function (releaseType, pageName) {
        const releasesSection = this.index[releaseType];
        if (!releasesSection) {
            throw new Error(`Unrecognised releases type ${releaseType}`);
        }

        const targetPage = releasesSection[pageName];
        if (!targetPage) {
            throw new Error(`Unrecognised releases page ${pageName}`);
        }
        return targetPage;
    }
};
