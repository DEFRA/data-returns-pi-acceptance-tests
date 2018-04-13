'use strict';
const Page = require('./page');

class LoginPage extends Page {
    get url () {
        return '/login';
    }

    enterUsername (username) {
        const userInput = browser.element('#username');
        if (username) {
            userInput.setValue(username);
        } else {
            userInput.clearElement();
        }
    }

    enterPassword (password) {
        const passInput = browser.element('#password');
        if (password) {
            passInput.setValue(password);
        } else {
            passInput.clearElement();
        }
    }

    submitLogin (username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.continue();
    }

    isPinFieldAvailable () {
        return browser.isExistingSafe('#validation_code');
    }

    assertBlocked () {
        // Initial check
        const foundErrorCode = browser.getAttribute('#error_code', 'value');
        foundErrorCode.should.equal('DR2280');
        this.isPinFieldAvailable().should.be.false; // eslint-disable-line no-unused-expressions

        // Reload page (issue new GET request and recheck)
        this.open();
        const foundErrorCodeAfterRefresh = browser.getAttribute('#error_code', 'value');
        foundErrorCodeAfterRefresh.should.equal('DR2280');
        this.isPinFieldAvailable().should.be.false; // eslint-disable-line no-unused-expressions
    }
}

module.exports = new LoginPage();
