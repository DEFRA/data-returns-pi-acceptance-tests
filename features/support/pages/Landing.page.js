'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

let radioButtonIndex = 0;
class LandingPage extends Page {

    get links () {
        return {
            openLink: {
                id: '#o-open-335'
            },
            viewLink: {
                id: '#o-view-335'
            }
        };
    }
    get url () { return '/'; }



    isLoggedIn () {
        // const onTaskList = browser.getAttribute('#page-name', 'value'
        const onTaskList = browser.getHTML('#page-name', false);
        console.log(onTaskList);
        // const onTaskList = browser.element('#page-name');
        onTaskList.should.equal('start');
    }

    clickLandingLink (linkSelector) {
        if (linkSelector && browser.isExisting(linkSelector)) {
            waitForNav(() => {
                winston.info('Clicking the link ' + linkSelector);
                browser.click(linkSelector);
            });
        } else {
            console.log(browser.getHTML('#content'));
            winston.error('Unable to find link in Sector.page.clickLink()');
            throw new Error('Unknown Permit link');
        }

    }
}



module.exports = new LandingPage();
