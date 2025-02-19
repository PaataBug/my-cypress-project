class LoginPage {
  visit() {
    cy.visit("/");
  }
  clickLoginLink() {
    cy.contains("Login").click();
  }
  enterUsername(username) {
    cy.get('input[name="login"]').clear().type(username);
  }
  enterPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }
  clickLoginButton() {
    cy.get('button[type="submit"]').click();
  }
  isLoggedIn() {
    return cy.contains("Logout");
  }
}

export default LoginPage;
