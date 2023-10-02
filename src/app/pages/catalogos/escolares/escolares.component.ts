import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';

@Component({
  selector: 'app-escolares',
  templateUrl: './escolares.component.html',
  styleUrls: ['./escolares.component.scss']
})
export class EscolaresComponent implements OnInit {
  public cards: any=[]
  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cargarData();
    /*
    this.cards=[
      {
        marca: "MAPPED",
        name: "Juego de Geometría",
        image: "https://github.com/Andres7027/CatalogoDeProductos/blob/main/Escolares/Escolares-1.png?raw=true",
        precio: "$35.00",
        precioAnt:"$43.00",
        promo: true
      }
    ]*/
  }

  public cargarData(){
    this.CatalogoService.get('https://crudcrud.com/api/b5bf0c0eae6146c39624bb146fb9a31b/escolares')
    .subscribe(respuesta => {
      this.cards = respuesta;
    })
  }
}
