import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Product } from 'src/app/Shared/data';
import { catchError } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm: string = '';
  public cardsSearch: Product[]=[];

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
    this.CatalogoService.get('search/'+name)
    .pipe(
      catchError((error: any) => {
        if (error.status === 400) {
          console.log('Error 400 en su solicitud');
          this.cardsSearch=[];
        }
        return [];
      })
    )
    .subscribe((respuesta: any) => {
      this.cardsSearch=respuesta;   
      //console.log(respuesta); 
      /*if (respuesta.length ===0){
        this.cargarDataSearch2(name);
      }else{
        //console.log(respuesta)
      }*/
    })
  }


  public cargarDataSearch2(name:string){ 
    this.CatalogoService.get('search2/'+name)
    .subscribe((respuesta: any) => {
      this.cardsSearch=respuesta;   
      console.log(respuesta); 
    })
  }

}