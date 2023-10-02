import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';

@Component({
  selector: 'app-adhesivos',
  templateUrl: './adhesivos.component.html',
  styleUrls: ['./adhesivos.component.scss']
})
export class AdhesivosComponent implements OnInit {
  public cards: any=[]

  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.CatalogoService.get('https://crudcrud.com/api/b5bf0c0eae6146c39624bb146fb9a31b/adhesivos')
    .subscribe(respuesta => {
      this.cards = respuesta;
    })
  }
}