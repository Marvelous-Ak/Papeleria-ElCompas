import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Paginas
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './pages/location/location.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';
import { CardComponent } from 'src/components/card/card.component';
import { AdhesivosComponent } from './pages/catalogos/adhesivos/adhesivos.component';
import { ArteComponent } from './pages/catalogos/arte/arte.component';
import { DidacticosComponent } from './pages/catalogos/didacticos/didacticos.component';
import { EscolaresComponent } from './pages/catalogos/escolares/escolares.component';
import { LapicesComponent } from './pages/catalogos/lapices/lapices.component';
import { ManualidadesComponent } from './pages/catalogos/manualidades/manualidades.component';
import { OficinaComponent } from './pages/catalogos/oficina/oficina.component';
import { PapelComponent } from './pages/catalogos/papel/papel.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogosComponent,
    NavbarComponent,
    LocationComponent,
    CommentsComponent,
    CardComponent,
    AdhesivosComponent,
    ArteComponent, 
    DidacticosComponent,
    EscolaresComponent,
    LapicesComponent,
    ManualidadesComponent,
    OficinaComponent,
    PapelComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
