import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/data';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent {

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  isButtonEnabled: boolean = false;


  updateButtonState() {
    this.isButtonEnabled = (this.checkbox1 ? 1 : 0) + (this.checkbox2 ? 1 : 0) === 1;
  }
  

  onButtonClick() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log('Button clicked!');
  }

  constructor(private router: Router) {}

  pageAddProduc() {
    this.router.navigate(['admin/Product-Add']);
  }
}
