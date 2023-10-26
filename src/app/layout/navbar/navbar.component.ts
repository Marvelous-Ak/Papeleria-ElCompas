import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchTerm: string = ''; // Modelo para el término de búsqueda
  constructor(private router: Router) { }

  navigateToSearch() {
    // Codificar la cadena de búsqueda y reemplazar '%20' con '+'
    const encodedSearchTerm = encodeURIComponent(this.searchTerm).replace(/%20/g, '_');
    this.router.navigate(['home/search'], { queryParams: { q: encodedSearchTerm } });
  }
}
