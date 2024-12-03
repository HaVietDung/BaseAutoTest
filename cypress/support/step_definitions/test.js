import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../utils/action_common')
import 'cypress-iframe';

// Authentication
When('login', () => {
    ACTION.visit(Cypress.env('HOME_URL'));
    ACTION.clickElement("//img[@class='gift-clear']");
    ACTION.clickElement("//a[text()='アカウント']");
    ACTION.typeText("//input[@id='login_email']", "eninhtocdai@gmail.com");
    ACTION.typeText("//input[@id='login_pass']", "1admit147");
    ACTION.clickElement("//button[@id='btn-submit-login']");
    ACTION.clickElement("//div[@class='logo top-page']");
});

const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
When('create_account', () => {
    ACTION.visit(Cypress.env('HOME_URL'));
    cy.wait(1000);
    ACTION.clickElement("//img[@class='gift-clear']");
    cy.wait(1000);
    ACTION.clickElement("//a[text()='アカウント']");
    cy.wait(1000);
    ACTION.clickElement("//a[text()='新規会員登録']");
    cy.wait(1000);
    ACTION.typeText("//input[@id='entry_email']", randomEmail);
    ACTION.typeText("//input[@id='entry_password']", "admit147");
    ACTION.typeText("//input[@id='entry_phone_number']", "0363480678");
    ACTION.clickElement("//input[@id='entry_user_policy_check']");
    ACTION.clickElement("//button[@class='ec-blockBtn--action']"); 
    ACTION.clickElement("//button[@class='ec-blockBtn--action']");
    ACTION.clickElement("//div[@class='logo top-page']");
});

When('change_customer_info', () => {
    ACTION.typeText("//input[@id='entry_name_name01']", "Auto");     
    ACTION.typeText("//input[@id='entry_name_name02']", "Test");
    ACTION.typeText("//input[@id='entry_kana_kana01']", "オート");
    ACTION.typeText("//input[@id='entry_kana_kana02']", "テスト");
    ACTION.typeText("//input[@id='entry_postal_code']", "1000000");
    ACTION.typeText("//input[@id='entry_address_addr02']", "Tokyo");
    ACTION.typeText("//input[@id='entry_email']", randomEmail);
    ACTION.clickElement("//button[@class='ec-blockBtn--cancel']");
});

When('change_card_info', () => {
    ACTION.clickElement("//li[@class='ec-navlistRole__item static icon-account ']");
    ACTION.clickElement("//a[text()='決済カードリスト']");
    ACTION.clickElement("//a[text()='クレジットカードを追加']");
    ACTION.waitIframe('//div[contains(@class, "__PrivateStripeElement")]//iframe',5555555555554444,345,111 );
});

When('without_login', () => {
    ACTION.visit(Cypress.env('HOME_URL'));
    cy.wait(1000);
    ACTION.clickElement("//img[@class='gift-clear']");
    cy.wait(1000);
});

// Authentication

When('close_gift', () => {
    cy.wait(1000);
    ACTION.scrollDown();
    cy.wait(1000);
    ACTION.clickElement("//button[@class='close close-gift']");
});

When('change_card', () => { 
    cy.wait(60000);
    // ACTION.waitIframe('//div(@class="__PrivateStripeElement")[1]//iframe',5555555555554444,345,111 );
    
});


When('payment_in_shopping', () => {
    ACTION.clickElement("(//button[@class='ec-blockBtn--action s2 btn-payment'])");
});

When('shopping_without_login', () => {
    ACTION.visit(Cypress.env('HOME_URL'));
    cy.wait(10000);
    ACTION.clickElement("//img[@class='gift-clear']");
    cy.wait(1000);
    ACTION.clickElement("(//button[@class='add-cart 125'])");
    cy.wait(3000);
    ACTION.clickElement("//li[@class='cart']");
    cy.wait(1000);
    ACTION.clickElement("//a[@class='ec-blockBtn--action s2 btn-shopping']");
    cy.wait(1000);
});

When('add_to_cart_failed', () => {
    ACTION.clickElement("(//button[@class='add-cart 516'])");
    cy.wait(1000);
});

When('add_to_cart_detail_failed', () => {
    ACTION.clickElement("(//a[@class='recommend-product-516'])");
    cy.wait(1000);
});

When('add_to_cart_top_page', () => {
    ACTION.clickElement("(//button[@class='add-cart 350'])[2]");
    cy.wait(3000);
})

When('product_detail_page', () => {
    ACTION.clickElement("(//a[@class='recommend-product-350'])");
    cy.wait(3000);
})

When('go_to_cart', () => {
    ACTION.clickElement("//li[@class='cart']");
    cy.wait(1000);
});

When('go_to_shopping_in_cart_page', () => {
    ACTION.clickElement("//a[@class='ec-blockBtn--action s2 btn-shopping']");
    cy.wait(1000);
});

When('add_cart_detail', () => {
    ACTION.clickElement("(//button[@class='ec-blockBtn--action s1 pc add-cart-detail'])");
    cy.wait(1000);
});


// One touch payment
When('one_touch_payment', () => {
    ACTION.clickElement("(//div[@class='ec-blockBtn--action open-one-touch go'])");
    cy.wait(1000);
});

When('swipe_element_payment', () => {
    ACTION.swipeElementLeftToRight("//div[@class='thumb drag-default']");
});


