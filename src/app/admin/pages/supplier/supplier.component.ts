import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { SuppliersService } from 'src/app/Services/suppliers.service';
import { Supplier } from 'src/app/Shared/data';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent {
  public listSuppliers: Supplier[] = [];
  //idSupplier!: number
  //phoneStr!: string;

  constructor(private SupplierService: SuppliersService, private router: Router, private LoadScript: LoadServiceService){
    LoadScript.Carga(["Boostrap5-3","ValidarRegistro"]);
  }

  ngOnInit() {
    this.listAll();
    this.getPages();
  }

  //// Traer todos los proveedores: función ShowAll
  public listAll() {
    this.SupplierService.showAll().subscribe((respuesta: any) => {
      respuesta.forEach((supplier : Supplier) => {
        supplier.updated_at = new Date(supplier.updated_at);
      });
      respuesta.sort((a:any, b:any) => b.updated_at.getTime() - a.updated_at.getTime());
      this.listSuppliers = respuesta;
    });
  }


  // Función para darle formato al número telefónico
  public formatoPhone(phone: number | undefined){
    if (phone === undefined) {
      return ''; 
    }
    const phoneStr = phone.toString();
    return phoneStr.slice(0, 3) + ' ' + phoneStr.slice(3, 6) + ' ' + phoneStr.slice(6);
  }

  /// Paginación
  itemsPerPage: number = 10; // Cantidad de productos por página
  currentPage: number = 1; // Página actual

  getTotalPages(): number {
    return Math.ceil(this.listSuppliers.length / this.itemsPerPage);
  }
  getPages(): number[] {
    return Array(this.getTotalPages())
      .fill(0)
      .map((x, i) => i + 1);
  }

  //modal
  mensaje!: string;
  isNew!: boolean;
  idS!: number;
  modalNew(estado: boolean){
    this.isNew= estado;
    if (estado){
      this.mensaje = "Agregar Proveedor"
      
    } else {
      this.mensaje = "Editar información de proovedor"
    }
    console.log(this.isNew);
  }

  idSupp(id: number){
    this.idS= id;
  }

  //eliminar
  //Eliminar
  deleteSupplier(id: number){
    this.SupplierService.delete(id)
  .subscribe((respuesta: any) => {
    console.log(respuesta)
  })
  }
}
