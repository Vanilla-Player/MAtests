import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I go to {string}", (url) => {
  cy.visit(url);
});

When("I click to the letter {string}", (letter) => {
  cy.get(`#${letter.toUpperCase()}`).click();
});

When("I enter a {string}", (word) => {
  cy.get("#inpArriesgarPalabra").type(word);
});

Then("I see {string}", (text) => {
  cy.get("h1").contains(`${text}`);
});

Then("I see the input changes {string}", (letter) => {
  cy.get("#inpPalabra").contains(`${letter}`);
});

Then("I see the input not changes {string}", (letter) => {
  cy.get("#inpPalabra").contains(`_______`);
});

// Ver como parametrizar
Then("I see attemps to {string}", (number) => {
  cy.get("#intentos").contains(`${parseInt(number)}`);
});
