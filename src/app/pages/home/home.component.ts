import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { Producto } from 'src/app/Shared/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public cardsPromo: Producto[]=[]

  constructor(private router: Router, private CatalogoService:CatalogosService) {}

  ngOnInit(): void {
    this.cargarPromo();
  }

  public cargarPromo() {
    this.CatalogoService.get('https://crudcrud.com/api/ed6bc2267d0e45568d14762be8a3acda/productos')
    .subscribe((respuesta: any) => {
      this.cardsPromo = respuesta.filter((productoPromo: any)=>{
        return productoPromo.promo === true
      });
    }
    )
  }
  
}
