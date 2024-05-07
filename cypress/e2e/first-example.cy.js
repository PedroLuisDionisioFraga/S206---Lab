/// <reference = cypress>

describe("Test Scenario", () => {
  it("Open Amazon Site and do Wrong Login", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get("#nav-link-accountList-nav-line-1").should("be.visible").trigger("mouseover");
    cy.get("#nav-flyout-ya-signin > .nav-action-signin-button > .nav-action-inner").click();
    // verify if a go to login page
    cy.url().should("include", "https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
    // put a wrong email
    cy.get("#ap_email").type("pedro123@test");
    cy.get('.a-button-inner > #continue').click();
    cy.wait(500);
    cy.get('.a-alert-content > .a-unordered-list > li > .a-list-item').should("contain.text", "\n            Não encontramos uma conta associada a este endereço de e-mail\n          ");
  });

  it("Open Amazon Site and do Right Login", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get("#nav-link-accountList-nav-line-1").should("be.visible").trigger("mouseover");
    cy.get("#nav-flyout-ya-signin > .nav-action-signin-button > .nav-action-inner").click();
    // verify if a go to login page
    cy.url().should("include", "https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
    // put a wrong email
    cy.get("#ap_email").type("pedrodfraga@hotmail.com");
    cy.get('.a-button-inner > #continue').click();
    cy.wait(500);
    cy.url().should("include", "https://www.amazon.com.br/ap/signin");
  });

  it("Open Amazon Site and go to Prime Page", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get('#nav-link-amazonprime > :nth-child(1)').click();
    cy.url().should("include", "https://www.amazon.com.br/prime?ref_=nav_cs_primelink_nonmember");
  });

  it("Check if the footer includes the Brazilian flag", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get('.navFooterBackToTopText').scrollIntoView();
    cy.get('.icp-color-base').should("contain.text", "Brasil");
  });

  it("Check if the drawer is visible", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get('#nav-hamburger-menu').click();
    cy.wait(500);
    cy.get('.hmenu-visible').should("be.visible");
    cy.wait(500);
    cy.get('.celwidget.hmenu-visible > #hmenu-canvas > #hmenu-customer-profile-link > #hmenu-customer-profile > #hmenu-customer-profile-right > #hmenu-customer-name > b').should("contain.text", "Olá, faça seu login");
  });

  it("Check if the search bar is visible", () => {
    cy.visit("https://www.amazon.com.br/");
    cy.wait(500);
    cy.get('#twotabsearchtextbox').should("be.visible");
  });
})