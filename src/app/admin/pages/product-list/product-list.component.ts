import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  
  public listProduct: Product[] = [];

  itemsPerPage: number = 8; // Cantidad de productos por página
  currentPage: number = 1; // Página actual

  // Agregar una propiedad para almacenar el producto a eliminar
  productToDelete: Product | null = null;

  constructor(
    private CatalogoService: CatalogosService,
    private router: Router,
    private titleB: Title
  ) {}
  ngOnInit() {
    this.listAll();
    this.getPages();
    this.titleB.setTitle('Lista de Productos');
  }

  //// Traer todos los productos: función ShowAll
  public listAll() {
    this.CatalogoService.getAll().subscribe((respuesta: any) => {
      respuesta.forEach((product:Product) => {
        product.updated_at = new Date(product.updated_at);
      });

      // Ordena los productos en orden descendente (más recientes primero)
      respuesta.sort((a:any, b:any) => b.updated_at.getTime() - a.updated_at.getTime());

      // Selecciona los n productos más recientes
      //this.listProduct = respuesta.slice(0, 12);
      this.listProduct = respuesta;
    });
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
  public deleteProduct(product: Product) {
    // Debería de tirar una alerta que pregunte si desea eliminar el producto...
    this.productToDelete = product; // Almacena el producto a eliminar en la propiedad productToDelete
    // Mostrar una alerta o cuadro de diálogo de confirmación aquí (ya se muestra en el HTML).
  }
  deleteConfirmed() {
    if (this.productToDelete) {
      this.CatalogoService.delete(this.productToDelete.id)
        .pipe(
          catchError((error: any) => {
            if (error.status === 500) {
              // mensaje de error al eliminar
            }
            return [];
          })
        )
        .subscribe((respuesta: any) => {
          this.listAll();
          // mensaje de que se eliminó exitosamente
        });
      // Limpiar el producto a eliminar
      this.productToDelete = null;
    }
  }

  //
  pageAddProduc() {
    this.router.navigate(['admin/Product-Add']);
  }
  pageEditeProduct(product: Product){
    this.router.navigate(['admin/Product-Edit/'+ product.id]);
  }
}
