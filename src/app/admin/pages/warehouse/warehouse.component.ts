import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/data';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  constructor(
    private router: Router,
  ) {}

  pageAddProduc() {
    this.router.navigate(['admin/Product-Add']);
  }
}
