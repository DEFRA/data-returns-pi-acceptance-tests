'use strict';
const Page = require('./page');

class TaskListPage extends Page {
    get url () {
        return '/task-list';
    }

    openSection (sectionName) {
        // Find the section with the given title
        const linkElement = browser.element('a=' + sectionName);
        linkElement.click();
    }
}

module.exports = new TaskListPage();
