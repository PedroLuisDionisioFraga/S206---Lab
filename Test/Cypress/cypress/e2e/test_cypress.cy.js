/// <reference = cypress>

describe("Test Scenario", () => {
  it("Open Website and verify integrity", () => {
    cy.visit("https://demoblaze.com/index.html");

    // Verify the options in the navbar
    cy.get('.active > .nav-link').should("contain.text", "Home")
    cy.get(':nth-child(2) > .nav-link').should("contain.text", "Contact");
    cy.get(':nth-child(3) > .nav-link').should("contain.text", "About us");
    cy.get('#cartur').should("contain.text", "Cart");
    cy.get('#login2').should("contain.text", "Log in");
    cy.get('#signin2').should("contain.text", "Sign up");
    cy.get('#nava > img').should("be.visible");
  });

  it("Open and to do Login", () => {
    cy.visit("https://demoblaze.com/index.html");
    cy.get('#login2').click();
    cy.get('#loginusername').type("pedro");
    cy.wait(200);
    cy.get('#loginpassword').type("123456");
    cy.wait(200);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    // I need to get a popup but I don't know how to do it
  });

  it("Open and to do Sign Up", () => {
    cy.visit("https://demoblaze.com/index.html");
    cy.get('#signin2').click();
    cy.get('#sign-username').type("pedro");
    cy.wait(200);
    cy.get('#sign-password').type("123456");
    cy.wait(200);
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    // I need to get a popup but I don't know how to do it
  });

  it("Add a product to the cart", () => {
    cy.visit("https://demoblaze.com/index.html");
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    // I need to get a popup but I don't know how to do it
  });
})