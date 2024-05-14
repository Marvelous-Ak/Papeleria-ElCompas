import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadServiceService } from 'src/app/Services/load-service.service';
import { ItemCarrito } from 'src/app/Shared/ItemCarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  listaItemsCarrito!: ItemCarrito[]
  total: number = 0;

  constructor(private router: Router, private LoadJS: LoadServiceService){
    LoadJS.Carga(["FuncionesScript/carrito"]);
  }


  ngOnInit(): void{
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito;

    this.total = 0;
    this.listaItemsCarrito?.forEach(item =>{
      if(item.stock && item.price){
        this.total += item.stock * item.price;
      }
    });
  }

  
  cleanCarrito(){
    localStorage.clear();
    this.listaItemsCarrito = [];
  }

  pagos(){
    this.router.navigate(['home/payments'])
  }
}
