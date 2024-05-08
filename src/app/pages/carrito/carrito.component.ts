import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrito } from 'src/app/Shared/ItemCarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  listaItemsCarrito: ItemCarrito[] | undefined

  constructor(private router: Router){

  }


  ngOnInit(): void{
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;
  }

  
  cleanCarrito(){
    localStorage.clear();
    this.listaItemsCarrito = [];
  }

  pagos(){
    this.router.navigate(['home/payments'])
  }
}
