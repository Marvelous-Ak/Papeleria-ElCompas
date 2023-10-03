import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedCataService } from 'src/app/Services/shared-cata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router, private sharedService: SharedCataService) {}

  mostrarSeccion1Click() {
    this.sharedService.mostrarSeccion1 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion2Click() {
    this.sharedService.mostrarSeccion2 = true;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion3Click() {
    this.sharedService.mostrarSeccion3 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion4Click() {
    this.sharedService.mostrarSeccion4 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion5Click() {
    this.sharedService.mostrarSeccion5 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion6Click() {
    this.sharedService.mostrarSeccion6 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion7Click() {
    this.sharedService.mostrarSeccion7 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion8 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  mostrarSeccion8Click() {
    this.sharedService.mostrarSeccion8 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.router.navigate(['/catalogos/catalogo']);
  }
  
  

}
