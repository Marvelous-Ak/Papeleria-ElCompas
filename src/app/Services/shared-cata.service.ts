import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SharedCataService {
  private categorySubject = new BehaviorSubject<number>(0); // Inicializamos el BehaviorSubject con el valor inicial 0
  category$ = this.categorySubject.asObservable(); // Observable que los componentes pueden suscribirse

  updateCategory(newCategory: number) {
    this.categorySubject.next(newCategory); // Actualizamos el valor del BehaviorSubject
  }
  constructor() { }
}
