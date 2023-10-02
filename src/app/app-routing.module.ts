import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a '/home' en la raíz
  { path: 'home', component: HomeComponent }, // Ruta para el componente "home"
  { path: 'location', component: LocationComponent}, // Ruta al componente "location"
  { path:'info.product', component: InfoProductComponent}
  
  // Agrega otras rutas según sea necesario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
