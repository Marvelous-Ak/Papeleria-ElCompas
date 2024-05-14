import { Component } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';

@Component({
  selector: 'app-pago-efectivo',
  templateUrl: './pago-efectivo.component.html',
  styleUrls: ['./pago-efectivo.component.scss']
})
export class PagoEfectivoComponent {
  constructor(private LoadScript: LoadServiceService){
    LoadScript.Carga(["ToggleVisibility", "Boostrap5-3"]);
  }

}
