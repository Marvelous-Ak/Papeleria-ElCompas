import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogosComponent } from './catalogos.component';
import { ManualidadesComponent } from './manualidades/manualidades.component';
import { ArteComponent } from './arte/arte.component';
import { EscolaresComponent } from './escolares/escolares.component';
import { AdhesivosComponent } from './adhesivos/adhesivos.component';
import { DidacticosComponent } from './didacticos/didacticos.component';
import { PapelComponent } from './papel/papel.component';
import { LapicesComponent } from './lapices/lapices.component';
import { OficinaComponent } from './oficina/oficina.component';

const routes: Routes = [
  {path:"",component:CatalogosComponent},
  {path:"manualidades", component:ManualidadesComponent},
  {path:"arte", component: ArteComponent},
  {path:"escolares", component:EscolaresComponent},
  {path:"adhesivos", component:AdhesivosComponent},
  {path:"didacticos", component:DidacticosComponent},
  {path:"papel", component:PapelComponent},
  {path:"escritura", component:LapicesComponent},
  {path:"oficina", component:OficinaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
