import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent {

  closeModal() {
    const modelDiv = document.getElementById('ModalProveedor');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
