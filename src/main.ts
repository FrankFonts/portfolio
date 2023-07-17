import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-about></app-about>
  `,
})
export class App {
  name = 'Angular';

  routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'second-component', component: ContactComponent },
  ];
}

bootstrapApplication(App);
