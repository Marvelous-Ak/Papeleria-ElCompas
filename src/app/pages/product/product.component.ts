import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  public producto!: Product;
  numero!: number;

  constructor( private CatalogoService:CatalogosService, private route: ActivatedRoute){
  }

  ngOnInit(){
    
    this.route.params.subscribe(params => {
      this.numero = +params['numero']; // El "+" convierte el parámetro en un número
      this.cargarProducto(this.numero);
    });
  }

  cargarProducto(id:number){
    this.CatalogoService.get('http://127.0.0.1:8000/api/products/'+id)
    .subscribe((respuesta: any) => {
      this.producto = respuesta;
      console.log(this.producto)
    })
  }

}
