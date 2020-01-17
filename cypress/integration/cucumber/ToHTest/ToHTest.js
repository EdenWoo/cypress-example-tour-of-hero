import {Given} from "cypress-cucumber-preprocessor/steps"

Given('I visit ToH site', () => {
  cy.visit('http://localhost:4200')
});

Given('I click Heroes link', () => {
  cy.get('body > app-root > nav > a:nth-child(2)').click();
});

Given("I add new Hero with name {string}" , (heroName) => {
  cy.get('input').type(heroName);
  cy.get('app-heroes > div > button').click();
});
