import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "http://127.0.0.1:8000/api/user/";
  constructor(private http: HttpClient) { }
 //POST: Crear usuarios
 public create(newUser: Users){
  return this.http.post(this.apiURL, newUser);
}

//PUT: Editar productos
public edit(newUser: Users, id:number){
  return this.http.put(this.apiURL + id, newUser);
}

//Delete: Eliminar producto
public delete(id: number){
  return this.http.delete(this.apiURL + id);
}
}
