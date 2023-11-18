import { Component, OnInit} from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';

declare var validaMSJ: any;

@Component({
  selector: 'app-user-log-reg',
  templateUrl: './user-log-reg.component.html',
  styleUrls: ['./user-log-reg.component.scss']
})

export class UserLogRegComponent implements OnInit {

  constructor(private LoadScript: LoadServiceService){
    LoadScript.Carga(["Boostrap5-3","ValidarRegistro"]);
  }

  ngOnInit(): void {  
      validaMSJ("mostrar");
  }
  

}
