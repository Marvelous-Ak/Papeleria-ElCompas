import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a '/home' en la raíz
  { path: 'home', component: HomeComponent }, // Ruta para el componente "home"
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'location', component: LocationComponent} // Ruta al componente "location"
  // Agrega otras rutas según sea necesario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
