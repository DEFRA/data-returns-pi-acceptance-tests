'use strict';
const Page = require('./page');


class SubmitPage extends Page {
    get url () { return '/submit'; }

    onSubmitPage () {
        const onSubmit= browser.getHTML('#page-name', false);
        console.log(onSubmit);
        onSubmit.should.equal('submit');
    }

}

module.exports = new SubmitPage();
