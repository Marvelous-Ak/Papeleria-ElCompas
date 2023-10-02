import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';

@Component({
  selector: 'app-arte',
  templateUrl: './arte.component.html',
  styleUrls: ['./arte.component.scss']
})
export class ArteComponent implements OnInit {
  public cards: any=[]

  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cargarData();
    /*
    this.cards=[
      {
        marca: "Pelikan",
        name: "Acuarela Infantil",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Arte/Arte-1.png?raw=true",
        precio: "$30.00",
        precioAnt:"",
        promo: false
      }
    ]*/
  }
  public cargarData(){
    this.CatalogoService.get('https://crudcrud.com/api/b5bf0c0eae6146c39624bb146fb9a31b/artes')
    .subscribe(respuesta => {
      this.cards = respuesta;
    })
  }
}