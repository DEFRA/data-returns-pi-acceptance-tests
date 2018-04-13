'use strict';
const {defineStep} = require('cucumber');
const TaskList = require('../../pages/TaskList.page');

defineStep('I am on the task-list page', function () {
    TaskList.checkOpen();
});
