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
                id: '#releasesair'
            },
            landconfirm: {
                id: '#releasesland'
            },
            waterconfirm: {
                id: '#releaseswater'
            },
            wwconfirm: {
                id: '#releaseswaste-water'
            },
            offsite: {
                id: '#transfersoff-site'
            },
            overseas: {
                id: '#overseas'
            },
            checkdata: {
                id: '#review'
            },
            sharedata: {
                id: '#share'
            },
            submitdata: {
                id: '#submit'
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
            winston.info('Calling waitForNav');
            waitForNav(() => {
                winston.info('Clicking the link ' + linkSelector);
                browser.click(linkSelector);
                // const linkElement = browser.element(linkSelector);
                // linkElement.click();
            });
        } else {
            console.log(browser.getHTML('#content'));
            winston.error('Unable to find link in Sector.page.clickLink()');
            throw new Error('Unknown link');
        }
    }
}

module.exports = new SectorsPage();
