'use strict';
const Page = require('./page');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class SubmitDataPage extends Page {
    get url () {
        return '/check';
    }

    onCheckData () {
        const onSubmit = browser.getHTML('#page-name', false);
        console.log(onSubmit);
        onSubmit.should.equal('submit');
    }

    clickContinue () {
        const contBtn = browser.element('#continueBtn');
        waitForNav(function () {
            contBtn.click();
        });
    }
}

module.exports = new SubmitDataPage();
