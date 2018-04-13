'use strict';
const Page = require('./page');

class TaskListPage extends Page {
    get url () {
        return '/task-list';
    }

    openSection (sectionName) {
        // Find the section with the given title
        const sectionLinkSpan = browser.element('span=' + sectionName);
        // The link is the parent of the span
        const linkElement = sectionLinkSpan.element('..');
        linkElement.click();
    }
}

module.exports = new TaskListPage();
