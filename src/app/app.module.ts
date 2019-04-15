import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './main/home/home.component';
import {NavComponent} from './main/nav/nav.component';
import {AppRouterModule} from './router/app-router.module';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './main/header/header.component';
import {SlickModule} from 'ngx-slick';
import {ShopComponent} from './main/shop/shop.component';
import {CategoriesComponent} from './main/categories/categories.component';
import {ProductComponent} from './main/shop/product/product.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {FormsModule} from '@angular/forms';
import {HttpClientService} from './services/http-client.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './main/cart/cart.component';
import { CartProductComponent } from './main/cart/cart-product/cart-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MainComponent,
    HeaderComponent,
    ShopComponent,
    CategoriesComponent,
    ProductComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    AuthenticationModule,
    SlickModule.forRoot(),
  ],
  providers: [
    HttpClientService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
