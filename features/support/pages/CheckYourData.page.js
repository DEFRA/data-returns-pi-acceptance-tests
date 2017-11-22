'use strict';
const Page = require('./page');


class CheckDataPage extends Page {
    get url () { return '/check'; }

    onCheckData () {
            const onCheck = browser.getHTML('#page-name',false);
            console.log(onCheck);
            onCheck.should.equal('content');
    }

}

module.exports = new CheckDataPage();
