import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LocationComponent } from './pages/location/location.component';
import { AdhesivosComponent } from './pages/catalogos/adhesivos/adhesivos.component';
import { ArteComponent } from './pages/catalogos/arte/arte.component';
import { DidacticosComponent } from './pages/catalogos/didacticos/didacticos.component';
import { EscolaresComponent } from './pages/catalogos/escolares/escolares.component';
import { LapicesComponent } from './pages/catalogos/lapices/lapices.component';
import { ManualidadesComponent } from './pages/catalogos/manualidades/manualidades.component';
import { OficinaComponent } from './pages/catalogos/oficina/oficina.component';
import { PapelComponent } from './pages/catalogos/papel/papel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a '/home' en la raíz
  { path: 'home', component: HomeComponent }, // Ruta para el componente "home"
  { path: 'location', component: LocationComponent}, // Ruta al componente "location"
  { path: 'adhesivos', component: AdhesivosComponent}, // Ruta al componente "location"
  { path: 'arte', component: ArteComponent}, // Ruta al componente "location"
  { path: 'didacticos', component: DidacticosComponent}, // Ruta al componente "location"
  { path: 'escolar', component: EscolaresComponent}, // Ruta al componente "location"
  { path: 'lapices', component: LapicesComponent}, // Ruta al componente "location"
  { path: 'manualidades', component: ManualidadesComponent}, // Ruta al componente "location"
  { path: 'oficina', component: OficinaComponent}, // Ruta al componente "location"
  { path: 'papeleria', component: PapelComponent}, // Ruta al componente "location"

  
  // Agrega otras rutas según sea necesario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
