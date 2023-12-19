import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './customer/home/home.component';
import { ProductsComponent } from './customer/products/products.component';
import { CardComponent } from './customer/card/card.component';
import { LoginComponent } from './auto/login/login.component';
import {ACDashboardComponent} from "./adminCenter/dashboard/dashboard.component";
import { PromontionComponent } from './adminCenter/promontion/promontion.component';
import { AddResponsableRayonComponent } from './adminCenter/add-responsable-rayon/add-responsable-rayon.component';
import { EditeResponsableRayonComponent } from './adminCenter/edite-responsable-rayon/edite-responsable-rayon.component';
import { AddPromontionComponent } from './adminCenter/add-promontion/add-promontion.component';
import { EditePromontionComponent } from './adminCenter/edite-promontion/edite-promontion.component';
import { AGDashboardComponent } from './AdminGeneral/dashboard/dashboard.component';
import { AdminCenterComponent } from './AdminGeneral/admin-center/admin-center.component';
import { AddAdminCenterComponent } from './AdminGeneral/add-admin-center/add-admin-center.component';
import { EditeAdminCenterComponent } from './AdminGeneral/edite-admin-center/edite-admin-center.component';
import { RRDashboardComponent } from './ResponsableRayon/dashboard/dashboard.component';
import { PromotionComponent } from './ResponsableRayon/add-promotion/promotion.component';
import { ProductComponent } from './ResponsableRayon/product/product.component';
import { AddProductComponent } from './ResponsableRayon/add-product/add-product.component';
import { EditeProductComponent } from './ResponsableRayon/edite-product/edite-product.component';
import {ACResponsableRayonComponent} from "./adminCenter/responsable-rayon/responsable-rayon.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CategoriesComponent } from './adminCenter/categories/categories.component';
import { AddCategoriesComponent } from './adminCenter/add-categories/add-categories.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CardComponent,
    LoginComponent,
    ACDashboardComponent,
    PromontionComponent,
    AddResponsableRayonComponent,
    EditeResponsableRayonComponent,
    AddPromontionComponent,
    EditePromontionComponent,
    AGDashboardComponent,
    AdminCenterComponent,
    AddAdminCenterComponent,
    EditeAdminCenterComponent,
    ACResponsableRayonComponent,
    RRDashboardComponent,
    PromotionComponent,
    ProductComponent,
    AddProductComponent,
    EditeProductComponent,
    CategoriesComponent,
    AddCategoriesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
