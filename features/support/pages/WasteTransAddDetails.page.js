'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

const ewcCode = [
    '01 01 01',
    '01 01 02',
    '02 01 01'
];

class SubstanceDetailsPage extends Page {
    get url () { return '/transfers/off-site/add'; }

    onWasteDetails () {
        const onWasteDetailsPage = browser.getHTML('#page-name', false);
        console.log(onWasteDetailsPage);
        onWasteDetailsPage.should.equal('off-site-add');
    }

    detailEWCCode () {
        const ewcCodeToUse = ewcCode.pop();
        const input = browser.$('#ewc-code');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue(ewcCodeToUse);
        console.log(input.getValue()); // outputs: 'test123'
    }

    detailWFDCode () {
        const wfdCodeArray = ['D5', 'R13', 'R5', 'D1', 'D2', 'D3', 'D4'];
        const wfdCodeIndex = Math.floor(Math.random() * wfdCodeArray.length);
        const randomWfdCodeToUse = wfdCodeArray[wfdCodeIndex];
        const input = browser.$('#wfd-code');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue(randomWfdCodeToUse);
        console.log(input.getValue()); // outputs: 'test123'
    }

    detailWasteTotal () {
        const input = browser.$('#value');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('010101');
        console.log(input.getValue()); // outputs: 'test123'
    }

    // const substanceId = label.getAttribute('for');
    // winston.info(JSON.stringify(substanceId));
    // const input = browser.$('input#' + substanceId);
    // input.click();
    // const getPrimaryValue = browser.$('th.unit-check=' + primaryValue);
    // getPrimaryValue.getText().should.equal(primaryValue);
    // const selectedSpan = browser.selectByValue(spans, primaryValue);

    // targetPrimaryValueCell.getText().should.equal(primaryValue);

    // if (expectedAliases && expectedAliases.length) {
    //     winston.info(`ControlledListTablePage: Checking ${dataItem.list} list displays the aliases "${expectedAliases}" for "${dataItem.primary}"`);
    //     // Find the alias list items within the same row of data (jump to parent row and then down again)
    //
    //
    //     const parentRow = targetPrimaryValueCell.$('..');
    //     const aliasesCell = parentRow.$('td.aliases');
    //     if (!aliasesCell) {
    //         winston.error(`Unable to traverse to aliases cell of ${dataItem.list} table but expecting aliases ${expectedAliases}`);
    //     } else {
    //         const targetAliasesElements = aliasesCell.$$('li');
    //         // For each <li> element we found, extract the text
    //         const targetAliasTextArr = targetAliasesElements.map(li => li.getText());
    //         // Ensure that the expected aliases are displayed
    //         winston.info(`ControlledListTablePage: Found aliases for "${dataItem.primary}": ${targetAliasTextArr}`);
    //         targetAliasTextArr.should.include.members(expectedAliases);
    //     }
    // }
}
module.exports = new SubstanceDetailsPage();
