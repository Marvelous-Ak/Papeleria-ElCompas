import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardsR: Product[]=[]

  constructor(private CatalogoService:CatalogosService, private router: Router) {}

  ngOnInit(){
    this.cargarDataR();
  }

  cargarDataR() {
    this.CatalogoService.get('http://127.0.0.1:8000/api/catalogos')
      .subscribe((respuesta: any) => {
        // Convierte las fechas de creación en objetos Date
        respuesta.forEach((product:Product) => {
          product.created_at = new Date(product.created_at);
        });

        // Ordena los productos en orden descendente (más recientes primero)
        respuesta.sort((a:any, b:any) => b.created_at.getTime() - a.created_at.getTime());

        // Selecciona los n productos más recientes
        this.cardsR = respuesta.slice(0, 8); //por el momento mustra unicamente 8
      });
  }

  showCategory(id:number){ 
    this.router.navigate(['catalog', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }

}
