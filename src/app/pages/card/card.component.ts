import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() detallesP:any;
  constructor(private route: Router, ){

  }

  ///Agregar a favoritos
  addFavorites(id:number){
    ///this.route.navigate(['home/location']);
    
  }

  //Cambio de vista al producto seleccionado desde los productos recientes:
  showProduct(id:number){ 
   this.route.navigate(['home/product', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }

  ///Comprar
  shopProduct(id:number){

  }
}
