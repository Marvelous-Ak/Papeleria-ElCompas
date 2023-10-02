import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';

@Component({
  selector: 'app-lapices',
  templateUrl: './lapices.component.html',
  styleUrls: ['./lapices.component.scss']
})
export class LapicesComponent  implements OnInit {
  public cards: any=[]

  constructor(private CatalogoService:CatalogosService){
  }
  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.CatalogoService.get('https://crudcrud.com/api/b5bf0c0eae6146c39624bb146fb9a31b/lapices')
    .subscribe(respuesta => {
      this.cards = respuesta;
    })
  }
}