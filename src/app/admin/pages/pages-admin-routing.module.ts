import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'Product-List',
    component: ProductListComponent,
  },
  { 
    path:'Product-Add',
    component: ProductAddComponent
  },
  {
    path: 'Product-Edit/:numero',
    component: ProductAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesAdminRoutingModule { }
