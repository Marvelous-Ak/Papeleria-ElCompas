import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Paginas
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LocationComponent } from './pages/location/location.component';
import { InfoProductComponent } from './pages/info-product/info-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    NavbarComponent,
    LocationComponent,
    InfoProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
