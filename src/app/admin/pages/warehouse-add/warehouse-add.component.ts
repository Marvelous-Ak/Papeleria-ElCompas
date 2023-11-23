import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WarehouseService } from 'src/app/Services/warehouse.service';
import { SuppliersService } from 'src/app/Services/suppliers.service';
import { ProductW } from 'src/app/Shared/data';

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.scss']
})
export class WarehouseAddComponent implements OnChanges{

  @Input() isNew: boolean = false /// para verificar si es add o update
  @Input() productWarehouse: number = 0;

  product: ProductW = {
    "id": 0, "brand": "", "name": "", "quantity": 0, "amount": 0,  "price": 0, "supplier_id": 0, "supplier": "",
    "created_at": new Date(), "updated_at" : new Date() 
  }

  mensaje!: string;
  business: string[]=[]

  
  constructor(private bodegaService: WarehouseService, private supplierService: SuppliersService){}

  ngOnChanges() {
    this.comprobar(this.isNew);
    this.importe();
  }

  ngOnInit() {
    this.comprobar(this.isNew);
    this.importe();
    this.showBusiness();
  }

  comprobar(comp: boolean){
    if (comp == true){
      this.mensaje = "Agregar"
    } else{
      this.mensaje = "Guardar"
      if(this.productWarehouse > 0){
        this.info(this.productWarehouse);
      }
      //this.edit= true;
      //this.editarInfo(comp);
    }
  }

  ///
  supplierAction(){
    if (this.isNew){
      this.product.amount= this.importe();
      console.log(this.product);
      this.newProduct();
    } else {
      this.product.amount= this.importe();
      this.updateProduct(this.productWarehouse);
    }

  }
  /// Agregar Proveedor
  newProduct(){
    this.bodegaService.add(this.product)
  .subscribe((respuesta: any) => {
    console.log(respuesta)
    location.reload();
  })
  }

  //editar
  updateProduct(id: number){
    this.bodegaService.update(this.product, id)
    .subscribe((respuesta: any) => {
    console.log(respuesta)
    location.reload();
  })
  }

  /// Mostrar información
  info(id: number){
    this.bodegaService.read(id)
  .subscribe((respuesta: any) => {
    this.product = respuesta;
    this.product.supplier = respuesta.supplier.business;
    //console.log(respuesta.supplier.business);
  })
  }

  //importe

  importe():number{
    if (this.product.quantity > 0 && this.product.price > 0) {
      /*let x;
      let numeroDecimalOriginal = 0;
      if (this.product.price % 1 ==0){
        numeroDecimalOriginal = this.product.quantity * this.product.price
      }else {
       x = this.product.price; // Ejemplo, reemplaza esto con tu número
      let resultado = Math.floor(x * 100); 
      let numeroRecorrido  = this.product.price * resultado
      numeroDecimalOriginal = numeroRecorrido / 100; 
      }*/
      return this.product.quantity * this.product.price//numeroDecimalOriginal;
    } else {
      return 0.00;
    }
  }

  ///supplier
  showBusiness(){
    this.supplierService.business()
    .subscribe((respuesta: any) =>{
      this.business = respuesta.business;
    })
  }


}
