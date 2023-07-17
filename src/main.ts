import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AboutComponent, RouterOutlet, RouterLink],
  template: `
    <h1>
      {{siteName}}
    </h1>

    <a routerLink="/about">about</a>

    <a routerLink="/contact">contact</a>
    
    <router-outlet></router-outlet>
  `,
})
export class App {
  siteName = 'Portfolio';
}

bootstrapApplication(App);
