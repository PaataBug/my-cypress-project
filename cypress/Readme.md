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
