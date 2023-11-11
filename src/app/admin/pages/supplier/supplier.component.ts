import { Component } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
})
export class SupplierComponent {

  constructor(private LoadScript: LoadServiceService){
    LoadScript.Carga(["Boostrap5-3","ValidarRegistro"]);
  }
}
