import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://127.0.0.1:8000/api/user';

  constructor(private http: HttpClient) { }

  // POST: Crear usuarios
  public create(newUser: Users): Observable<any> {
    return this.http.post(this.apiURL, newUser);
  }
  
 // POST: login usuarios
 public login(newUser: Users) {
  return this.http.post(`${this.apiURL}/${"login"}`, newUser);
}

  // PUT: Editar usuarios
  public edit(newUser: Users, id: number): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, newUser);
  }

  // DELETE: Eliminar usuarios
  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  // Verificación de correo electrónico
  public verifyEmail(code: string): Observable<any> {
    const verificationURL = `${this.apiURL}/verify/${code}`;
    return this.http.get(verificationURL);
  }
}
