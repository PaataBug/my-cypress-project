import OrangeHRMLoginPage from '../pages/orangehrmLoginPage';

describe('OrangeHRM Login Automation', () => {
  const loginPage = new OrangeHRMLoginPage();

  it('should log in successfully using credentials from the page', () => {
    loginPage.visit();

    loginPage.getCredentials().then(($cred) => {
      const usernameText = $cred.find('p').eq(0).text();
      const passwordText = $cred.find('p').eq(1).text();
      const username = usernameText.split(':')[1].trim();
      const password = passwordText.split(':')[1].trim();

      loginPage.enterUsername(username);
      loginPage.enterPassword(password);
      loginPage.clickLoginButton();

      cy.url().should('include', '/dashboard/index');
    });
  });
});
