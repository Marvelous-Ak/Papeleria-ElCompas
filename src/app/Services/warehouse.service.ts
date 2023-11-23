import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ProductW } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private apiUrl = "http://127.0.0.1:8000/api/warehouse/";
  constructor(private http: HttpClient) { }
  //CRUD
   //POST: Agregar un Producto
   public add(newProducto: ProductW){
    return this.http.post(this.apiUrl + "add", newProducto);
  }
  //GET: Mostrar información de un Producto
  public read(id: number){
    return this.http.get(this.apiUrl + "show/" + id);
  }
  //PUT: Editar información de un Producto
  public update(newProducto: ProductW, id:number){
    return this.http.put(this.apiUrl + "update/" + id, newProducto);
  }

  //Delete: Eliminar un Producto
  public delete(id: number){
    return this.http.delete(this.apiUrl + "delete/" + id);
  }
  //GET: Mostrar todos los productos
  public showAll(){
    return this.http.get(this.apiUrl + "showAll");
  }
  //PUT: Editar Cantidad de un Producto
  public updateQ(quantity: number, id:number){
    return this.http.put(this.apiUrl + "updateQ/" + id, quantity);
  }
}
