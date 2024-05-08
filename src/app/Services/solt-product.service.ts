import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoltProductService {
  // private urlApi = 'https://crudcrud.com/api/ed6bc2267d0e45568d14762be8a3acda/productos';
  
  constructor(private http:HttpClient) { }

  /*public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }*/
  public getData(apiUrl:string){
    return this.http.get(apiUrl); //GET Api crud crud
  }
}
