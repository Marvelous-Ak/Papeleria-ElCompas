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
    "verification_code":""
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
  console.log(respuesta);
  location.reload();
})

}
loginUser(){
  
}

}
