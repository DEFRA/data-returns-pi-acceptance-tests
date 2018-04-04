'use strict';
const Page = require('./page');
const winston = require('winston');
const waitForNav = require('../lib/wait-for-navigation-on-action');

// Select the first radio button by default
let radioButtonIndex = 0;

class SubstanceSelectPage extends Page {
    get url () { return '/releases/land/add-substance'; }

    onSubSelect () {
        const onSubSelectPage = browser.getHTML('#page-name', false);
        console.log(onSubSelectPage);
        onSubSelectPage.should.equal('substances-land');
    }

    selectNextUnused () {
        const substanceRadioButtons = browser.$$('//input[@name="parameterId"]');
        const nextRadioButton = substanceRadioButtons[radioButtonIndex];
        winston.info(nextRadioButton.getHTML());
        // Increment the index so that the next time this method is called we select the next one down
        radioButtonIndex++;

        nextRadioButton.click();

    }


    // checkDataDisplayed () {
    //    const primaryValue = 'Mirex';

        // Find the name cell containing the text we are looking for
        // winston.info(`ControlledListTablePage: Checking ${dataItem.list} list has a primary value of "${dataItem.primary}"`);

      //  const span = browser.$('span.name=' + primaryValue);
      //  const label = span.$('..');

     //   const substanceId = label.getAttribute('for');
      //  winston.info(JSON.stringify(substanceId));
    //    const input = browser.$('input#' + substanceId);
      //  input.click();


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
module.exports = new SubstanceSelectPage();
