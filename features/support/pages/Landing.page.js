'use strict';
const Page = require('./page');

class LandingPage extends Page {
    get url () { return '/'; }

    isLoggedIn () {
       // const onTaskList = browser.getAttribute('#page-name', 'value');
        const onTaskList = browser.getHTML('#page-name',false);
        console.log(onTaskList);
        // const onTaskList = browser.element('#page-name');
        onTaskList.should.equal('start');
    }
}

module.exports = new LandingPage();
