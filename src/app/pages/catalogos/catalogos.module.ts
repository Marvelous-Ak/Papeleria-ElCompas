import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from '../catalogos/catalogos.component';
//import { ArteComponent } from './arte/arte.component';
import { ArteComponent } from './arte/arte.component';
import { ManualidadesComponent } from './manualidades/manualidades.component';
import { EscolaresComponent } from './escolares/escolares.component';
import { LapicesComponent } from './lapices/lapices.component';
import { PapelComponent } from './papel/papel.component';
import { DidacticosComponent } from './didacticos/didacticos.component';
import { AdhesivosComponent } from './adhesivos/adhesivos.component';
import { OficinaComponent } from './oficina/oficina.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    ArteComponent,
    ManualidadesComponent,
    EscolaresComponent,
    LapicesComponent,
    PapelComponent,
    DidacticosComponent,
    AdhesivosComponent,
    OficinaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
