'use strict';
const {defineStep} = require('cucumber');
const TaskList = require('../../support/pages/TaskList.page');

defineStep('I am on the task-list page', function () {
    TaskList.checkOpen();
    console.log('All Sectors Page');
});
