import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I go to {string}", (url) => {
  cy.visit(url);
});

When("I click to the letter {string}", (letter) => {
  cy.get(`#${letter.toUpperCase()}`).click();
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



Then("I see attemps {string}", (number) => {
  cy.get("#intentos").contains(`${number}`);
});


When("I see ingrese palabra, I enter the word {string}", (word) => {
  cy.get("#wordInput").type(`${word}`);
  cy.get("#wordInputButton").click();
});
