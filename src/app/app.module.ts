import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Paginas
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './pages/location/location.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //CatalogosComponent,
    NavbarComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
