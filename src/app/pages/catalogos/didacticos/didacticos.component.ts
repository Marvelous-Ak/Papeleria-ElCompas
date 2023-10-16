import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { Producto } from 'src/app/Shared/data';

@Component({
  selector: 'app-didacticos',
  templateUrl: './didacticos.component.html',
  styleUrls: ['./didacticos.component.scss']
})
export class DidacticosComponent  implements OnInit {
  public cards: Producto[]=[]

  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.CatalogoService.get('https://crudcrud.com/api/ed6bc2267d0e45568d14762be8a3acda/productos')
    .subscribe((respuesta: any) => {
      this.cards = respuesta.filter((productoZ: any)=>{
        return productoZ.category.includes ('Didacticos');
      });
  

    }
    
    )
  }
}
