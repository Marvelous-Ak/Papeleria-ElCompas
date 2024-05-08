import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Comment } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardsR: Product[]=[];
  public cardsC: Comment[]=[];
  
  
  

  constructor(private CatalogoService:CatalogosService, private router: Router) {}

  ngOnInit(){
    this.cargarDataR();

    this.cardsC=[
      {
        id: 2, content: "axuc", user_name: "Pedro", user_image: "http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg", rating: 4
      },
      {
        id: 1, content: "acdcdcdc", user_name: "Carlos", user_image: "http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg", rating: 0
      }
    ];
  }

  cargarDataR() {
    this.CatalogoService.getAll()
      .subscribe((respuesta: any) => {
        // Convierte las fechas de creación en objetos Date
        respuesta.forEach((product:Product) => {
          product.created_at = new Date(product.created_at);
        });

        // Ordena los productos en orden descendente (más recientes primero)
        respuesta.sort((a:any, b:any) => b.created_at.getTime() - a.created_at.getTime());

        // Selecciona los n productos más recientes
        this.cardsR = respuesta.slice(0, 12); //por el momento mustra unicamente 8
      });
  }

  showCategory(id:number){ //Cambio a la vista de cataloos desde el carrusel de catálogos
    this.router.navigate(['home/catalog', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }

  
}
