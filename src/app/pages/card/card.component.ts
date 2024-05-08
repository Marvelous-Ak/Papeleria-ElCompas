import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Shared/data';
import { ItemCarrito } from 'src/app/Shared/ItemCarrito';


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

  agregarCarrito(item: Product){
    //console.log(item);
    let iCarrito: ItemCarrito = {
      id: item.id,
      name: item.name,
      price: item.price,
      stock: 1,
      image: item.image
    }

    if(localStorage.getItem("carrito") == null){
        let carrito: ItemCarrito[] = [];
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      let carritoStorage = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;

      for(let i=0; i<carrito.length; i++){
        let itemC: ItemCarrito = carrito[i];
        if(iCarrito.id == itemC.id){
          index = i;
          break;
        }        
      }
      
      if(index == -1){
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        let itemCarrito: ItemCarrito = carrito[index];
        itemCarrito.stock!++;
        carrito[index] = itemCarrito;
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }

  }
}
