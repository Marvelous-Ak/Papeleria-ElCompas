import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LocationComponent } from './location/location.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';

//Prueba de diseños
import { CardComponent } from './card/card.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'home',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
