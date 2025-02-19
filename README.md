# Buggy Cars Login Automation with Cypress

This project demonstrates an automated test using Cypress for the Buggy Cars login functionality. The test uses the Page Object Model (POM) design pattern to keep the code modular, maintainable, and easy to extend.

## Project Structure

my-cypress-project/
├── .env
├── cypress.config.js
└── cypress
    ├── e2e
    │   └── login.spec.js
    └── pageObjects
        └── loginPage.js

- **.env:** Stores environment variables such as login credentials.
- **cypress.config.js:** Cypress configuration file with the base URL and environment variables.
- **cypress/pageObjects/loginPage.js:** Contains the Page Object Model for the login page.
- **cypress/e2e/login.spec.js:** The Cypress test script for automating the login process.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Git

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/PaataBug/my-cypress-project.git
   cd my-cypress-project
2. **Install Dependencies:**
    ```bash
    npm install

3. **Set Up Environment Variables:**
    ```dotenv
    APP_USERNAME=testp
    APP_PASSWORD=Happytesting1!

## How to Run the Script

1. **Open Cypress Test Runner:** 
    ```bash
    npx cypress open

2. **Run Tests Headlessly (Optional):**
    ```bash
    npx cypress run


# Cypress Test Automation – Login Test

## 📌 Explanation of the Test Flow

### 🏗 Page Object Model (POM)
The login actions are encapsulated in `cypress/pages/loginPage.js`.  
This page object includes methods for:

- **Navigating to the home page (`visit()`)** – Uses `cy.visit("/")` to go to the base URL.
- **Clicking the "Login" link (`clickLoginLink()`)** – Finds the "Login" button using `cy.contains("Login")` and clicks it.
- **Entering username and password (`enterUsername(username)` and `enterPassword(password)`)**  
  - Locates the username input field (`name="login"`) and types the username.  
  - Locates the password input field (`name="password"`) and types the password.  
- **Clicking the "Login" button (`clickLoginButton()`)** – Finds the submit button using `button[type="submit"]` and clicks it.
- **Verifying successful login (`isLoggedIn()`)** – Checks if the "Logout" element is visible, indicating a successful login.

---

### 🔍 Test Script in `cypress/e2e/buggy-project.cy.js`
The test script creates an instance of the `LoginPage` class and performs the following steps:

1️⃣ **Visit the homepage** using `loginPage.visit()`.  
2️⃣ **Click the "Login" link** to navigate to the login page.  
3️⃣ **Enter valid credentials** retrieved from environment variables:  
   - Username from `Cypress.env("username")`  
   - Password from `Cypress.env("password")`  
4️⃣ **Click the "Login" button** to submit the form.  
5️⃣ **Verify successful login** by checking if the "Logout" button is visible.

---

## ✅ Summary
This test follows the **Page Object Model (POM)** approach, making it **modular** and **reusable**.  
The **login functionality** is abstracted into `LoginPage.js`, and the test script in `buggy-project.cy.js` simply calls the required methods.  
