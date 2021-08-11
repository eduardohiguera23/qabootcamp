# QA Bootcamp

The purpose of this project is to apply best practices and techniques covered during the front-end sessions using Todoist web application

## Tech Stack
* Javascript
* Testcafe
* Jenkins
* Github actions
* Eslint
* Allure

## Pre-requisites

* Node.js (latest version)
* Chrome & Firefox

## Instalation

1. Clone the project : `git clone https://github.com/eduardohiguera23/qabootcamp.git`

2. Go to the repository folder and run `npm install`

3. Create a .env file with the following variables:
```
EMAIL=wbdwdiskkxryqlhwrs@wqcefp.com
PASSWORD=12345678
```

## Dependencies

* dotenv
* testcafe
* testcafe-reporter-allure

## scripts

* `npm run login-test`: runs all the tests from the login fixture on chrome
* `npm run task-test`: runs all the tests from the task fixture on chrome headless mode
* `npm run project-test`: runs all the tests from the project fixture on chrome headless mode
* `npm run logintestsheadless2browsers`: runs all the tests from the login fixture on chrome and firefox headless mode
* `npm run smoke-test`: runs all the smoke tests on chrome
* `npm run smoke-testjenkins`: runs all the smoke tests on chrome headless mode
* `npm run salltestsjenkins`: runs all the tests on chrome headless mode
* `npm run apitests`: runs the api tests
* `npm run lint`: runs eslint for all the files in the pom filder
* `npm run lintinit`: initializes eslint


Generate a report on allure: 
Execute `allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report` after each script

