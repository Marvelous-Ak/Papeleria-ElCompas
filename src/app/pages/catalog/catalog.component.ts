import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/data';
import { CatalogosService } from 'src/app/Services/catalogs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public cards: Product[]=[];
  numero!: number;
  selectedCard: any = null; 

  constructor( private CatalogoService:CatalogosService, private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.numero = +params['numero']; // El "+" convierte el parámetro en un número
      this.cargarData(this.numero);
    });
    
  }
  public cargarData(id:number){ //Cargamos datos del API con el id 
    this.CatalogoService.get('http://127.0.0.1:8000/api/catalogs/'+id)
    .subscribe((respuesta: any) => {
      this.cards = respuesta;
    })
  }

  selectCard(card: any) {
    this.selectedCard = card;
    this.showProduct(card.id);
  }

  showProduct(id:number){ 
   this.router.navigate(['product', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }
  
}
