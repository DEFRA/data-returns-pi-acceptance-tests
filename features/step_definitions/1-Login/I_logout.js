'use strict';
const {defineStep} = require('cucumber');
const Logout = require('../../support/pages/Logout-page');

defineStep('I logout', function () {
    Logout.submitLogout();
});
