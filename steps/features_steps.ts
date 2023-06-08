import {When, Then} from '@wdio/cucumber-framework';
import {expect} from 'chai';
import allureReporter from '@wdio/allure-reporter';

When('I print {string} feature name', async (featureName: string) => {
    allureReporter.addFeature('Feature print');
    console.log(featureName);
})

When('I print {string} phrase', async (featureName: string) => {
    allureReporter.addFeature('Phrase print');
    console.log(featureName);
})

Then('Everything\'s ok', () => {
    expect(1).to.be.equal(1);
})
