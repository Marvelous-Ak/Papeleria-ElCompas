import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Supplier } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private apiUrl = "http://127.0.0.1:8000/api/supplier";
  constructor(private http: HttpClient) { }

  //CRUD
   //POST: Agregar un Proveedor
  public create(newSupplier: Supplier){
    return this.http.post(this.apiUrl, newSupplier);
  }
  //GET: Mostrar información de un Proveedor
  public read(id: number){
    return this.http.get(this.apiUrl + "/" + id);
  }
  //PUT: Editar información de un Proveedor
  public update(newSupplier: Supplier, id:number){
    return this.http.put(this.apiUrl + "/" + id, newSupplier);
  }

  //Delete: Eliminar un Proveedor
  public delete(id: number){
    return this.http.delete(this.apiUrl + "/" + id);
  }
  //GET: Mostrar todos los proovedores
  public showAll(){
    return this.http.get(this.apiUrl);
  }

  //GET: business
  public business(){
    return this.http.get(this.apiUrl+"s");
  }
}
