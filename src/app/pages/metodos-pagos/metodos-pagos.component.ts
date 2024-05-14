import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadServiceService } from 'src/app/Services/load-service.service';

@Component({
  selector: 'app-metodos-pagos',
  templateUrl: './metodos-pagos.component.html',
  styleUrls: ['./metodos-pagos.component.scss']
})
export class MetodosPagosComponent{

  constructor(private router: Router, private LoadScript: LoadServiceService){
    LoadScript.Carga(["PayPal"]);
  }

  
  entrada(number: number){
    console.log('Numero: ',number);
    switch(number){
      case 1:
        this.router.navigate([""]);
        break;
      case 2:
        //this.router.navigate([""]);
        break;
      case 3: 
        this.router.navigate(["home/deposito-compra"]);
        break;
      case 4:
        //this.router.navigate([""]);
        break;
      case 5:
        this.router.navigate([]);
        break;
      default:
        this.router.navigate(["home"]);
        break;  
    }
  }

}
