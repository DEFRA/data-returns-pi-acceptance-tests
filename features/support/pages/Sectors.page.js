'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

/*
landing.clickLink(check)
 */

class SectorsPage extends Page {
    get links () {
        return {
            contact: {
                id: '#contact'
            },
            site: {
                id: '#site'
            },

            airconfirm: {
                id: '#air-confirm'
            },

            landconfirm: {
                id: '#land-confirm'
            },

            waterconfirm: {
                id: '#water-confirm'
            },

            wwconfirm: {
                id: '#waste-water-confirm'
            },

            offsite: {
                id: '#off-site'
            },

            overseas: {
                id: '#overseas'
            }

        };
    }

    get url () {
        return '/all-sectors';
    }

    onAllSectors () {
        const onTaskList = browser.getHTML('#page-name', false);
        onTaskList.should.equal('task-list');
    }

    clickLink (linkSelector) {
        if (linkSelector && browser.isExisting(linkSelector)) {
            const linkElement = browser.element(linkSelector);
            linkElement.click();
        } else {
            winston.error('Unable to find link in Sector.page.clickLink()');
            throw new Error('Unknown link');
        }
    }
}

module.exports = new SectorsPage();
