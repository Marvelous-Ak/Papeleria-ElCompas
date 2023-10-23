import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CommentComponent } from './comment/comment.component';
import { LocationComponent } from './location/location.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';

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
    path: 'comment',
    component: CommentComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: 'product/:numero',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
