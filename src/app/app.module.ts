import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CommentComponent } from './pages/comment/comment.component';
import { LocationComponent } from './pages/location/location.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SkeletonComponent,
    //pages
    HomeComponent,
    CatalogComponent,
    CommentComponent,
    LocationComponent,
    SearchComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
