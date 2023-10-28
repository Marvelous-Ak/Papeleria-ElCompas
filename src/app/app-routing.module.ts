import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { SkeletonAdminComponent } from './admin/layout/skeleton-admin/skeleton-admin.component';
const routes: Routes = [
  {
    path: 'home',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages-routing.module').then(
            (m) => m.PagesRoutingModule
          ),
      },
    ],
  },
  {
    path: 'admin', // Ruta para el administrador
    component: SkeletonAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/pages/pages-admin-routing.module').then(
            (m) => m.PagesAdminRoutingModule
          ), // Carga el módulo de enrutamiento de administración
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
