# Ng7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

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




<h1 [ngClass]="{'gray': h1Style,'large': !h1Style}">Home</h1>

<h1 [style.color]="h1Style ? 'gray' : 'pink'">Home</h1>
 
<h1 [ngStyle]="{ 'color': h1Style ? 'gray' : 'black', 'font-size': !h1Style ? '1em' : '4em' }">Home</h1>

<button (click)="firstClick()">Click me</button>


  // firstClick() {
  //   //console.log('clicked');
  //   //this.h1Style = true; 
  //   this.data.getUsers(); 
  // }
  

## Create new Project
ng new my-project
cd my-project
ng serve

## Ng Generate

## Generate a component 
ng g c name

## Generate a Service
ng g s data

## package it for Distribution
ng build 