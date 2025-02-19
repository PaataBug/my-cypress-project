// cypress/e2e/login.spec.js
import LoginPage from "../pages/loginPage";

describe("Buggy Cars Login", () => {
  const loginPage = new LoginPage();

  it("should successfully log in with valid credentials", () => {
    loginPage.visit();
    loginPage.clickLoginLink();
    loginPage.enterUsername(Cypress.env("username"));
    loginPage.enterPassword(Cypress.env("password"));
    loginPage.clickLoginButton();
    loginPage.isLoggedIn().should("be.visible");
  });
});
