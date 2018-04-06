'use strict';
const {defineStep} = require('cucumber');
const Page = require('../../support/pages/page.js');
const TaskList = require('../../support/pages/TaskList.page');
const winston = require('winston');

/*
 * Generic step - assumes that the current page has a continue button which, when pressed, will navigate back to the
 * task list
 */
defineStep('I continue to the task list', function () {
    winston.info('Continuing to the task list');
    Page.doContinue();

    winston.info(`Continuing completed, checking task-list open`);
    TaskList.checkOpen();
});
