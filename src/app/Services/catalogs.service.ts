import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ProductPost } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private apiURL = "http://127.0.0.1:8000/api/";
  constructor(private http: HttpClient) { }

  //Consulta get modificada
  public get(url: string){
    return this.http.get(this.apiURL + url);
  }

  //GET: traer todos los productos
  public getAll(){
    return this.http.get(this.apiURL + "catalogos");
  }

  //POST: Crear productos
  public create(newProduct: ProductPost){
    return this.http.post(this.apiURL + "catalogos", newProduct);
  }

  //PUT: Editar productos
  public edit(newProduct: ProductPost, id:number){
    return this.http.put(this.apiURL + "catalogs/"+ id, newProduct);
  }

  //Delete: Eliminar producto
  public delete(id: number){
    return this.http.delete(this.apiURL + "catalogs/" + id);
  }
}
