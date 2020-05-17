# MecurisTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Blueprint
## Pages / Routing
- login
- logout
- products
- products/:id
- cart
- history

## Technologies
- Angular 9
- Flex-Layout - for responsiveness
- Material Design
- Font Awsome

## work methods
- Scalable folder / module structure as recommended by experts to be: **core** for singletones, **shared** for common components, and **features** for the components.
- Feature / routing modules allows lazy loading: For performance reasons, each page in the app has its own module.
- The data of the product page will be taken directly from the products page, but if the product page is loaded directly from a url path, a request will be done from the server to get the data.
- All global variables goes to the envirenment file, respectively.
- CSS global variables and mixings goes to the style-variables.scss file.

## TODO List
- Creating a storage service to store the state locally / remotely 
- Adding a state management like NgRX
- Writing a deeper unit testing + e2e tesing
- Creating a loader service to show a spinner until the data comes
- Creating interceptors for error handling + requsts retrying
- Adding an interceptor of CanActivate for pages that needs authentication (like the History page)
- Adding a summery of the total price on the cart page
