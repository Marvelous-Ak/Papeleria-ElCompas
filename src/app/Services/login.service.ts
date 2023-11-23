import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Shared/data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://127.0.0.1:8000/api/user';

  constructor(private http: HttpClient, private router: Router) { }

  // POST: Crear usuarios
  public create(newUser: Users): Observable<any> {
    return this.http.post(this.apiURL, newUser);
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

   // POST: login usuarios
 public login(credentials:{email: string, password: string}) {
  return this.http.post(`${this.apiURL}/${"login"}`, credentials);
}

  /// Autentificación: Roles
  public rol(response: any): void {
    const userRole = response;
    if (userRole === 1) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['home/']);
    }
  }
}
