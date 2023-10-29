import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadServiceService } from 'src/app/Services/load-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  public producto!: Product;
  numero!: number;

  constructor( private CatalogoService:CatalogosService, private route: ActivatedRoute, private _LoadScript: LoadServiceService){
    _LoadScript.Carga(["ClickImg"]);
  }

  ngOnInit(){
    
    this.route.params.subscribe(params => {
      this.numero = +params['numero']; // El "+" convierte el parámetro en un número
      this.cargarProducto(this.numero);
    });
  }

  cargarProducto(id:number){
    this.CatalogoService.get('products/'+id)
    .subscribe((respuesta: any) => {
      this.producto = respuesta;
      console.log(this.producto)
    })
  }

  /*onClick(){
    Swal.fire({
      icon: 'error',
      title: 'Inicie Sesion',
      text: 'Inicie S-esion o Crea una cuenta para continuar',
    })
  }*/
  
}
