import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavBar = true;
  title = 'sHizler sHop';
  constructor(
    router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.showNavBar = false;
        }
      }
    });
  }
}
