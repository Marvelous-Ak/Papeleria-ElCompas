import { Injectable } from '@angular/core';
import { Producto } from '../Shared/data';

@Injectable({
  providedIn: 'root'
})
export class SharedCataService {

  public productos: Producto[] = []; 


  constructor() { }
}
