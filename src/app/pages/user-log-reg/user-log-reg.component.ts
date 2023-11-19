import { Component, OnInit} from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { LoginService } from 'src/app/Services/login.service';
import { Users } from 'src/app/Shared/data';


@Component({
  selector: 'app-user-log-reg',
  templateUrl: './user-log-reg.component.html',
  styleUrls: ['./user-log-reg.component.scss']
})

export class UserLogRegComponent implements OnInit {
  Usuario:Users={
    "id": 0,
    "name":"",
    "lastName":"",
    "email":"",
    "password":"",
  };
  constructor(private LoadScript: LoadServiceService, private LoginS: LoginService){
    LoadScript.Carga(["Boostrap5-3","ValidarRegistro"]);
  }

  ngOnInit(): void {  

  }
/// Agregar Usuario
newUser(){ 
this.LoginS.create(this.Usuario)
.subscribe((respuesta: any) => {
  localStorage.setItem('compas_token', respuesta.token);
  location.reload();
})
}
/// Logeo de usuarios...
loginUser(){
  const credentials = { email: this.Usuario.email, password: this.Usuario.password };
 this.LoginS.login(credentials)
  .subscribe((respuesta: any) => {
    ///localStorage.setItem('compas_token', respuesta.token);
    //console.log(respuesta.user.rolAdmi)
    this.LoginS.rol(respuesta.user.rolAdmi); //redireccionar si es un administrador
})
}

}
