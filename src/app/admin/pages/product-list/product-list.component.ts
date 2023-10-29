import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public listProduct: Product []=[];

  itemsPerPage: number = 10; // Cantidad de productos por página
  currentPage: number = 1; // Página actual

  constructor( private CatalogoService:CatalogosService, private router: Router){
  }
  ngOnInit(){
    this.listAll();
    this.getPages();
  }


  //// Traer todos los productos: función ShowAll
  public listAll(){ 
    this.CatalogoService.get('http://127.0.0.1:8000/api/catalogos')
    .subscribe((respuesta: any) => {
      this.listProduct = respuesta;
    })
  }

  //Paginación
  getTotalPages(): number {
    return Math.ceil(this.listProduct.length / this.itemsPerPage);
  }
  
  getPages(): number[] {
    return Array(this.getTotalPages())
      .fill(0)
      .map((x, i) => i + 1);
  }

  pageAddProduc(){
    this.router.navigate(['admin/Product-Add']);
  }
  
}
