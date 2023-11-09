import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//Layout User
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
//Pages User
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CommentComponent } from './pages/comment/comment.component';
import { LocationComponent } from './pages/location/location.component';
import { SearchComponent } from './pages/search/search.component';
import { CardComponent } from './pages/card/card.component';
import { ProductComponent } from './pages/product/product.component';
//Layout Admin
import { SkeletonAdminComponent } from './admin/layout/skeleton-admin/skeleton-admin.component';
import { FooterAdminComponent } from './admin/layout/footer-admin/footer-admin.component';
import { NavbarAdminComponent } from './admin/layout/navbar-admin/navbar-admin.component';
import { BodyComponent } from './admin/layout/body/body.component';
//Pages Admin
import { SupplierComponent } from './admin/pages/supplier/supplier.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { ProductListComponent } from './admin/pages/product-list/product-list.component';
import { ProductAddComponent } from './admin/pages/product-add/product-add.component';

//Cargar servicios Script
import { LoadServiceService } from './Services/load-service.service';
import { UserLogRegComponent } from './pages/user-log-reg/user-log-reg.component';
import { SupplierAddComponent } from './admin/pages/supplier-add/supplier-add.component';


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
    BodyComponent,
    NavbarAdminComponent,
    //Pages Admin
    DashboardComponent,
    ProductListComponent,
    ProductAddComponent,
    UserLogRegComponent,
    SupplierComponent,
    SupplierAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoadServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
