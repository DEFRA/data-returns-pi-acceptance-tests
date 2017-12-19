'use strict';
const Logout = require('../support/pages/Logout-page');
module.exports = function () {
    this.defineStep('I logout', function () {
        Logout.submitLogout()
    });
};
