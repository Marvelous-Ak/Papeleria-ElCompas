import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/Services/warehouse.service';
import { ProductW } from 'src/app/Shared/data';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit{
  checkboxes: boolean[] = [];
  isButtonEnabled: boolean = false;

  public listProducts: ProductW[] = [];
  public business: string[] = [];

  idP!:number


  updateButtonState() {
    const checkedCount = this.checkboxes.filter(checkbox => checkbox).length;
    this.isButtonEnabled = checkedCount === 1;
    //this.idP= id;
    //console.log(id);
    ///this.boton
  }
  

  onButtonClick() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('Button clicked!');
  }

  constructor(private router: Router, private bodega: WarehouseService) {}

  ngOnInit(){
    this.listAll();
    this.checkboxes = new Array(this.listProducts.length).fill(false);
  }

  pageAddProduc() {
    this.router.navigate(['admin/Product-Add'], { queryParams: { id: this.idP } });
  }

  ///serivcios..
  ///mostrar todos los productos:
  public listAll() {
    this.bodega.showAll().subscribe((respuesta: any) => {
      respuesta.forEach((product : ProductW) => {
        product.updated_at = new Date(product.updated_at);
      });
      respuesta.sort((a:any, b:any) => b.updated_at.getTime() - a.updated_at.getTime());
      this.listProducts = respuesta;
    
      for (let i = 0; i < this.listProducts.length; i++) {
        this.listProducts[i].supplier = respuesta[i].supplier.business
       }

    });
  }

  //eliminar 
  deleteProduct(id: number){
    this.bodega.delete(id)
  .subscribe((respuesta: any) => {
    console.log(respuesta)
    location.reload();

  })
  }

  ///Modal
  mensaje!: string;
  isNew!: boolean;
  idS!: number;
  modalNew(estado: boolean){
    this.isNew= estado;
    if (estado){
      this.mensaje = "Agregar Producto"
      
    } else {
      this.mensaje = "Editar información del producto"
    }
  }

  //envio de productW
  productoEnviado!: number
  sendP(id: number){
    this.productoEnviado = id;
  }



}
