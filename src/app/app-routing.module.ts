import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LocationComponent } from './pages/location/location.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
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
  { path: 'info.product', component: InfoProductComponent},
  { path: 'comments' , component: CommentsComponent}, // Ruta al componente "location"
  { path: 'location', component: LocationComponent}, // Ruta al componente "location",
  { path: 'catalogs', component: CatalogosComponent},

  //importamos los catálogos
  { path: 'adhesivos', component: AdhesivosComponent},
  { path: 'artes', component: ArteComponent},
  { path: 'didacticos', component: DidacticosComponent},
  { path: 'escolares', component: EscolaresComponent},
  { path: 'escritura', component: LapicesComponent},
  { path: 'manualidades', component: ManualidadesComponent},
  { path: 'oficina', component: OficinaComponent},
  { path: 'papel', component: PapelComponent},



  
  // Agrega otras rutas según sea necesario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
