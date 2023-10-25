import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';
import { SkeletonAdminComponent } from './admin/layout/skeleton-admin/skeleton-admin.component';
import { FooterAdminComponent } from './admin/layout/footer-admin/footer-admin.component';
import { NavigationAdminComponent } from './admin/layout/navigation-admin/navigation-admin.component';
import { NavbarAdminComponent } from './admin/layout/navbar-admin/navbar-admin.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';

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
    ProductComponent,
    //Area Admin
    SkeletonAdminComponent,
    FooterAdminComponent,
    NavigationAdminComponent,
    NavbarAdminComponent,
    //Pages Admin
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
