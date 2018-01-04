'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

class SubstanceDetailsPage extends Page {
    get url () { return '/releases/waste-water/detail'; }

    onSubDetails () {
        const onSubDetailsPage = browser.getHTML('#page-name', false);
        console.log(onSubDetailsPage);
        onSubDetailsPage.should.equal('releases-detail-waste-water');
    }

    detailEnterValue () {
        var input = browser.$('#value');
        console.log('>>>>>>>' + JSON.stringify(input));
        input.setValue('2345');
        console.log(input.getValue()); // outputs: 'test123'
    }

    detailSelectUnit () {
        // const unitValue = 'Bq';
        // const primaryValue = 'unit';

        const selectUnit = browser.$('#unit');
        console.log('>>>>>>>' + JSON.stringify(selectUnit));

        selectUnit.selectByValue('4');
        console.log(selectUnit.getValue());
    }

    detailSelectMethod () {
        // const unitValue = 'Bq';
        // const primaryValue = 'unit';

        const selectUnit = browser.$('#method');
        console.log('>>>>>>>' + JSON.stringify(selectUnit));

        selectUnit.selectByValue('3');
        console.log(selectUnit.getValue());
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
