import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {HomeComponent} from "./customer/home/home.component";
import {ProductsComponent} from "./customer/products/products.component";
import {CardComponent} from "./customer/card/card.component";
import {LoginComponent} from "./auto/login/login.component";
import {ACDashboardComponent} from "./adminCenter/dashboard/dashboard.component";
import {PromontionComponent} from "./adminCenter/promontion/promontion.component";
import {ACResponsableRayonComponent} from "./adminCenter/responsable-rayon/responsable-rayon.component";
import {AddResponsableRayonComponent} from "./adminCenter/add-responsable-rayon/add-responsable-rayon.component";
import {EditeResponsableRayonComponent} from "./adminCenter/edite-responsable-rayon/edite-responsable-rayon.component";
import {AddPromontionComponent} from "./adminCenter/add-promontion/add-promontion.component";
import {EditePromontionComponent} from "./adminCenter/edite-promontion/edite-promontion.component";
import {AGDashboardComponent} from "./AdminGeneral/dashboard/dashboard.component";
import {AdminCenterComponent} from "./AdminGeneral/admin-center/admin-center.component";
import {AddAdminCenterComponent} from "./AdminGeneral/add-admin-center/add-admin-center.component";
import {EditeAdminCenterComponent} from "./AdminGeneral/edite-admin-center/edite-admin-center.component";
import {RRDashboardComponent} from "./ResponsableRayon/dashboard/dashboard.component";
import {PromotionComponent} from "./ResponsableRayon/add-promotion/promotion.component";
import {ProductComponent} from "./ResponsableRayon/product/product.component";
import {AddProductComponent} from "./ResponsableRayon/add-product/add-product.component";
import {EditeProductComponent} from "./ResponsableRayon/edite-product/edite-product.component";
import {CategoriesComponent} from "./adminCenter/categories/categories.component";
import {AddCategoriesComponent} from "./adminCenter/add-categories/add-categories.component";

const routes: Routes = [
  // routes pour Admin General
  {path: 'AG', component: AGDashboardComponent},
  {path: 'AG/Dashboard', component: AGDashboardComponent},
  {path: 'AG/AdminCenter', component: AdminCenterComponent},
  {path: 'AG/AddAdminCenter', component: AddAdminCenterComponent},
  {path: 'AG/EditeAdminCenter/:id', component: EditeAdminCenterComponent},

  // routes pour Admin Center
  {path: 'AC', component: ACDashboardComponent},
  {path: 'AC/Dashboard', component: ACDashboardComponent},
  {path: 'AC/ResponsableRayon', component: ACResponsableRayonComponent},
  {path: 'AC/AddResponsableRayon', component: AddResponsableRayonComponent},
  {path: 'AC/EditeResponsableRayon/:id', component: EditeResponsableRayonComponent},
  {path: 'AC/PromotionModel', component: PromontionComponent},
  {path: 'AC/AddPromotion', component: AddPromontionComponent},
  {path: 'AC/EditePromotion/:id', component: EditePromontionComponent},
  {path: 'AC/Categories', component: CategoriesComponent},
  {path: 'AC/AddCategories', component: AddCategoriesComponent},

  // routes pour Responsable Rayon
  {path: 'RR', component: RRDashboardComponent},
  {path: 'RR/Dashboard', component: RRDashboardComponent},
  {path: 'RR/PromotionModel', component: PromotionComponent},
  {path: 'RR/Product', component: ProductComponent},
  {path: 'RR/AddProduct', component: AddProductComponent},
  {path: 'RR/EditeProduct/:id', component: EditeProductComponent},

  {path: '', component: HomeComponent},
  {path: 'customer', component: HomeComponent},
  {path: 'customer/home', component: HomeComponent},
  {path: 'customer/products', component: ProductsComponent},
  {path: 'customer/card', component: CardComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule {
}
