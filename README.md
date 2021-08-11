# qabootcamp
proyect for todoist

## Instalation

Clone the project : `git clone https://github.com/eduardohiguera23/qabootcamp.git`

Run `npm install`

## scripts

run each fixture separately:
```
npm run login-test
npm run task-test
npm run project-test
```
run Login fixture in 2 different browsers at the same time in headless mode:
```
npm run logintestsheadless2browsers
```
run smoke testing:
```
npm run smoke-test
```
run eslint:
```
npm run lint
```

to generate a report on allure, execute `allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report` after each script

