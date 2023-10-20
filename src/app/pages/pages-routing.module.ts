import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CommentComponent } from './comment/comment.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'catalog',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
