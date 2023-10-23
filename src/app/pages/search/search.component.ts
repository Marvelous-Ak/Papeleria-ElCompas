import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from 'src/app/Shared/data';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm: string = '';
  public cardsSearch: Product[]=[];
  selectedCard: any = null; 

  constructor(private route: ActivatedRoute, private CatalogoService:CatalogosService, private router: Router) { }

  ngOnInit() {
    // Obtén el valor del parámetro "q" de la URL
    this.route.queryParams.subscribe(params => {
      this.searchTerm = this.formatSearchTerm(params['q']) || '';
      this.cargarDataSearch(this.searchTerm);
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

  //Consultar al API
  public cargarDataSearch(name:string){ 
    this.CatalogoService.get('http://127.0.0.1:8000/api/search/'+name)
    .subscribe((respuesta: any) => {
      this.cardsSearch = respuesta;
    })
  }

  //Cambio a products
  selectCard(card: any) {
    this.selectedCard = card;
    this.showProduct(card.id);
  }

  showProduct(id:number){ 
   this.router.navigate(['product', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }
}