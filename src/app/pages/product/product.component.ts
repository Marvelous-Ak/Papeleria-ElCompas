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

  public producto: Product[]=[];
  public productoEjemploRodo: Product []=[];
  numero!: number;

  constructor( private CatalogoService:CatalogosService, private route: ActivatedRoute){
  }

  ngOnInit(){

    this.productoEjemploRodo=[{   //recibes este formato, usalo para tus ejemplos
      brand: '',
      name: '',
      image: '',
      price: 2,
      priceAnt: 9,
      promo: true,
      description: '',
      stock: 2,
      id: 1,
      created_at: new Date('2023-10-20T08:00:00')
    }]

    
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
