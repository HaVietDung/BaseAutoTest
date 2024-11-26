import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../utils/action_common')

When('test', () => {
    ACTION.visit(Cypress.env('HOME_URL'));
    cy.wait(10000);
})