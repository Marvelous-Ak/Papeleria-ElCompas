import { Component } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';

@Component({
  selector: 'app-user-log-reg',
  templateUrl: './user-log-reg.component.html',
  styleUrls: ['./user-log-reg.component.scss']
})

export class UserLogRegComponent {

  constructor(private LoadScript: LoadServiceService){
    LoadScript.Carga(["Boostrap5-3","ValidarRegistro"]);
  }

}
