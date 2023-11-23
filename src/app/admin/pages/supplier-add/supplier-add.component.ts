import { Component, Input, OnChanges } from '@angular/core';
import { SuppliersService } from 'src/app/Services/suppliers.service';
import { Supplier } from 'src/app/Shared/data';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss'],
})
export class SupplierAddComponent implements OnChanges {
  @Input() isNew: number=1 ;
  edit: boolean = false;
  mensaje!: string;
  supplierInfo: Supplier = {
    "business": "", "name": "", "lastName": "", "email": "", "address": "", "id": 1, 
    "created_at": new Date(), "updated_at" : new Date()
  }
 
  constructor(private supplierService: SuppliersService){}

  ngOnChanges() {
    this.comprobar(this.isNew);
  }

  comprobar(comp: number){
    if (comp == 0){
      this.mensaje = "Agregar"
    } else{
      this.mensaje = "Guardar"
      this.edit= true;
      this.editarInfo(comp);
    }
  }

  /// Mostrar información
  editarInfo(id: number){
    this.supplierService.read(id)
  .subscribe((respuesta: any) => {
    this.supplierInfo = respuesta;
  })
  }

  supplierAction(){
    if (this.edit){
      this.editSupplier(this.isNew);
    } else {
      this.newSupplier();
    }
  }
  /// Agregar Proveedor
  newSupplier(){
    this.supplierService.create(this.supplierInfo)
  .subscribe((respuesta: any) => {
    console.log(respuesta)
  })
  }

  //Editar info
  editSupplier(id: number){
    this.supplierService.update(this.supplierInfo, id)
  .subscribe((respuesta: any) => {
    console.log(respuesta)
  })
  }
}
