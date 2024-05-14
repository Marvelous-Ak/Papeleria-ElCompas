import { Component } from '@angular/core';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { ItemCarrito } from 'src/app/Shared/ItemCarrito';

@Component({
  selector: 'app-buys-complete',
  templateUrl: './buys-complete.component.html',
  styleUrls: ['./buys-complete.component.scss']
})
export class BuysCompleteComponent {
  digito!: number;
  listaItemsCarrito: ItemCarrito[] | undefined
  
  
  constructor(private LoadJS: LoadServiceService){
    this.generateRandomNumber();
    localStorage.clear();
    this.listaItemsCarrito = [];
    LoadJS.Carga(["FuncionesScript/InvalidBack"])
  }
  OnInit(){
      
  }
  generateRandomNumber(){
    const min = 100000; // Mínimo número de 6 dígitos
    const max = 999999; // Máximo número de 6 dígitos
    this.digito = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
}
/*function generateRandomNumber(): number {
  const min = 100000; // Mínimo número de 6 dígitos
  const max = 999999; // Máximo número de 6 dígitos
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = generateRandomNumber();
console.log('Número aleatorio de 6 dígitos:',randomNumber);*/
