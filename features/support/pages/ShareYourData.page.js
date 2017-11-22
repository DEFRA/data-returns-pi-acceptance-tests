'use strict';
const Page = require('./page');


class SharePage extends Page {
    get url () { return '/share'; }

    onSharePage () {
        const onShare= browser.getHTML('#page-name', false);
        console.log(onShare);
        onShare.should.equal('share');
    }

}

module.exports = new SharePage();
