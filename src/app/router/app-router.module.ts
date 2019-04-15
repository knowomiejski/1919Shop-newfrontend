import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../main/home/home.component';
import {ShopComponent} from '../main/shop/shop.component';
import {LoginComponent} from '../main/login/login.component';
import {RegisterComponent} from '../main/register/register.component';
import {CategoriesComponent} from '../main/categories/categories.component';
import {CartComponent} from '../main/cart/cart.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ]
})

export class AppRouterModule {
}
