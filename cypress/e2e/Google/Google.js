
import { When, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I go to Google', (text) =>{

  cy.visit("https://www.google.com/")

})


When('I focus on text input', (text) => {
  cy.get('input[name="q"]').as('input').click();
});

When('I type {string}', (text) => {
  cy.get('@input').type(text);
});

When('I click button {string}', (value) => {
  cy.xpath(`//input[@value="${value}"]`).first().click();
});