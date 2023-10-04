import { Injectable } from '@angular/core';
import { Producto } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class SharedCataService {

  public productos: Producto[] = []; 

  mostrarSeccion1 = false;
  mostrarSeccion2 = false;
  mostrarSeccion3 = false;
  mostrarSeccion4 = false;
  mostrarSeccion5 = false;
  mostrarSeccion6 = false;
  mostrarSeccion7 = false;
  mostrarSeccion8 = false;

  constructor() { }
}
