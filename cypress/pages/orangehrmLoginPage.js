class OrangeHRMLoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    getCredentials() {
      return cy.get('div.orangehrm-demo-credentials');
    }
  
    enterUsername(username) {
      cy.get('input[name="username"]').clear().type(username);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]').clear().type(password);
    }
  
    clickLoginButton() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default OrangeHRMLoginPage;
  