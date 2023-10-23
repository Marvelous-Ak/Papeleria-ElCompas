import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtén el valor del parámetro "q" de la URL
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = this.formatSearchTerm(params['q']) || '';
    });
  }

  // Función para formatear el término de búsqueda
  formatSearchTerm(term: string): string {
    if (term) {
      // Reemplazar guiones bajos por espacios
      return term.replace(/_/g, ' ');
    }
    return term;
  }
}
