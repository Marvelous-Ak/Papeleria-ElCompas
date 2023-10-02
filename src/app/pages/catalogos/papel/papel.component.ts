import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';

@Component({
  selector: 'app-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.scss']
})
export class PapelComponent  implements OnInit {
  public cards: any=[]

  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cards=[
      {
        marca: "Neenah",
        name: "Cartulina 58x89cm",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-1.PNG?raw=true",
        precio: "$26.00",
        precioAnt:"",
        promo: false
      },
      {
        marca: "Pingüino",
        name: "Papel Crepe 2mx50cm",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-2.PNG?raw=true",
        precio: "$13.00",
        precioAnt:"",
        promo: false
      },
      {
        marca: "Pascua",
        name: "Fomi con diamantina tamaño carta",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-3.PNG?raw=true",
        precio: "$13.00",
        precioAnt:"",
        promo: false
      },
      {
        marca: "Lumen",
        name: "Papel Cascarón 28x34.5cm",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-4.PNG?raw=true",
        precio: "$7.00",
        precioAnt:"",
        promo: false
      },
      {
        marca: "Articolor",
        name: "Papel China 10 pligeos",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-5.png?raw=true",
        precio: "$40.00",
        precioAnt:"",
        promo: false
      },
      {
        marca: "Lumen",
        name: "Papel Lustre 70x50cm",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Papel/Papel-6.PNG?raw=true",
        precio: "$9.00",
        precioAnt:"",
        promo: false
      }

    ]
  }
}