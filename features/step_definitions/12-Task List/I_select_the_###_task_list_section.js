'use strict';
const {defineStep} = require('cucumber');
const TaskList = require('../../support/pages/TaskList.page');

/*
 * Opens an entry on the task list page for the given section name
 */
defineStep(/^I select the "(.*)" task-list section$/, function (sectionName) {
    TaskList.openSection(sectionName);
});
