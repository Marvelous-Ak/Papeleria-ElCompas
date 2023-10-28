import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public listProduct: Product []=[];

  itemsPerPage: number = 10; // Cantidad de productos por página
  currentPage: number = 1; // Página actual

  constructor( private CatalogoService:CatalogosService){
  }
  ngOnInit(){
    this.listAll();
    this.getPages();
  }


  //// Traer todos los productos: función ShowAll
  public listAll(){ 
    this.CatalogoService.getAll()
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

  //Eliminar
  public deleteProduct(product: Product){
    //deberia de tirar una alerte que pregunte si desea eliminar el producto ... 
    
    this.CatalogoService.delete(product.id)
    .pipe(
      catchError((error: any) => {
        if (error.status === 500) {
          /// mensaje de error al eliminar
        }
        return [];
      })
    )
    .subscribe((repuesta: any)=>{
      this.listAll();
      // mensaje de que se eliminó exitosamente

    })
  }
}
