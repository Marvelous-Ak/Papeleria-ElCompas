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

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  isButtonEnabled: boolean = false;

  public listProducts: ProductW[] = [];
  public business: string[] = [];


  updateButtonState() {
    this.isButtonEnabled = (this.checkbox1 ? 1 : 0) + (this.checkbox2 ? 1 : 0) === 1;
  }
  

  onButtonClick() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('Button clicked!');
  }

  constructor(private router: Router, private bodega: WarehouseService) {}

  ngOnInit(){
    this.listAll();
  }

  pageAddProduc() {
    this.router.navigate(['admin/Product-Add']);
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
