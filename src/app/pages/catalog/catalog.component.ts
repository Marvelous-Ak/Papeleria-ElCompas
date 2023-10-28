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
  category: string ='';

  constructor( private CatalogoService:CatalogosService, private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.numero = +params['numero']; // El "+" convierte el parámetro en un número
      this.cargarData(this.numero);
      this.cateText(this.numero);
    });
    
  }
  public cargarData(id:number){ //Cargamos datos del API con el id 
    this.CatalogoService.get('catalogs/'+id)
    .subscribe((respuesta: any) => {
      this.cards = respuesta;
    })
  }

  public cateText(id:number){
    switch(id){
      case 1: this.category= 'Papel'; break;
      case 2: this.category='Escolares'; break;
      case 3: this.category= 'Artes'; break;
      case 4: this.category='Escritura'; break;
      case 5: this.category= 'Oficina'; break;
      case 6: this.category='Manualidades'; break;
      case 7: this.category= 'Didácticos'; break;
      case 8: this.category='Adhesivos'; break;
      default: this.category='ERROR XD'; break;
    }
  }

  selectCard(card: any) {
    this.selectedCard = card;
    this.showProduct(card.id);
  }

  showProduct(id:number){ 
   this.router.navigate(['home/product', id]); //cambiamos de vista, el id nos indicará que valores extraer del API
  }
  
}
