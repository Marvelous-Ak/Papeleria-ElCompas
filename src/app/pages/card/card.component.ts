import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() detallesP:any;
  constructor(private route: Router){

  }

  addFavorites(){
    this.route.navigate(['home/location']);
    
  }
}
