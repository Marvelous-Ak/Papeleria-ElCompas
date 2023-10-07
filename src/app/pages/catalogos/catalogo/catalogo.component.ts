import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/Services/catalogos.service';
import { SharedCataService } from 'src/app/Services/shared-cata.service';
import { Producto } from 'src/app/Shared/data';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  public cards: Producto[]=[]
  public arteCards: Producto[]=[]
  public escolarCards: Producto[]=[]
  public papelCards: Producto[]=[]
  public lapizCards: Producto[]=[]
  public adheCards: Producto[]=[]
  public didacticoCards: Producto[]=[]
  public officeCards: Producto[]=[]
  public manualidadesCards: Producto[]=[]

  constructor(public sharedService: SharedCataService, private CatalogoService:CatalogosService){
  }

  ngOnInit(): void {

    this.cargarData(); 
    //this.filtrado();
  }
  // Consumo de API
  
  public cargarData(){
    this.CatalogoService.get('https://crudcrud.com/api/ed6bc2267d0e45568d14762be8a3acda/productos')
    .subscribe((respuesta: any) => {
      this.cards = respuesta;
      this.arteCards = this.cards.filter(cards => cards.category.includes("Artes"));
      this.escolarCards = this.cards.filter(cards => cards.category.includes("Escolares"));
      this.officeCards = this.cards.filter(cards => cards.category.includes("Oficina"));
      this.papelCards = this.cards.filter(cards => cards.category.includes("Papel"));
      this.lapizCards = this.cards.filter(cards => cards.category.includes("Escritura"));
      this.didacticoCards = this.cards.filter(cards => cards.category.includes("Didacticos"));
      this.manualidadesCards = this.cards.filter(cards => cards.category.includes("Manualidades"));
      this.adheCards = this.cards.filter(cards => cards.category.includes("Adhesivos"));
      this.sharedService.productos = this.cards;

    }
    
    )
  }

  public filtrado(){
    
  }

  //métodos para redirigir

  mostrarSeccion1Click() {
    this.sharedService.mostrarSeccion1 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion2Click() {
    this.sharedService.mostrarSeccion2 = true;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion3Click() {
    this.sharedService.mostrarSeccion3 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion4Click() {
    this.sharedService.mostrarSeccion4 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion5Click() {
    this.sharedService.mostrarSeccion5 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion6Click() {
    this.sharedService.mostrarSeccion6 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion7Click() {
    this.sharedService.mostrarSeccion7 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion1 = false;
    this.sharedService.mostrarSeccion8 = false;
  }
  mostrarSeccion8Click() {
    this.sharedService.mostrarSeccion8 = true;
    this.sharedService.mostrarSeccion2 = false;
    this.sharedService.mostrarSeccion3 = false;
    this.sharedService.mostrarSeccion4 = false;
    this.sharedService.mostrarSeccion5 = false;
    this.sharedService.mostrarSeccion6 = false;
    this.sharedService.mostrarSeccion7 = false;
    this.sharedService.mostrarSeccion1 = false;
  }
  

}
