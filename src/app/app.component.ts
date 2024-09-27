import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambié styleUrl a styleUrls
})
export class AppComponent {
  title = 'frontEnd';
  isHomePage: boolean = false;

  constructor(private router: Router) {
    // Filtramos los eventos de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Comprobamos si estamos en la ruta de inicio
      this.isHomePage = event.url === '/';
    });
  }
}
