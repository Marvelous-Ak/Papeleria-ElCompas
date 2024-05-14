import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LocationComponent } from './location/location.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { UserLogRegComponent } from './user-log-reg/user-log-reg.component';
import { InfoPagesComponent } from './info-pages/info-pages.component';


//Prueba de diseños
import { CardComponent } from './card/card.component';
import { CommentComponent } from './comment/comment.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MetodosPagosComponent } from './metodos-pagos/metodos-pagos.component';
import { PagoComponent } from './pago/pago.component';
import { PagoEfectivoComponent } from './pago-efectivo/pago-efectivo.component';
import { BuysCompleteComponent } from './buys-complete/buys-complete.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'catalog/:numero',
    component: CatalogComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'product/:numero',
    component: ProductComponent,
  },

  //Prueba de diseños
  {
    path: 'comment',
    component: CommentComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'login',
    component: UserLogRegComponent,
  },
  {
    path: 'info-pages',
    component: InfoPagesComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: 'payments',
    component: MetodosPagosComponent,
  },
  {
    path: 'buyproduct-carr',
    component: PagoComponent,
  },
  {
    path: 'deposito-compra',
    component: PagoEfectivoComponent,
  },
  {
    path: 'complete-buys',
    component: BuysCompleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
