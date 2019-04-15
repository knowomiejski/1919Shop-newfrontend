import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {RegisterModel} from '../models/register.model';
import {ProductModel} from '../models/product.model';
import {CartModel} from '../models/cart.model';
import {MessageModel} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public _header;
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  createAuthenticationHeader(email, password) {
    localStorage.clear();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(email + ':' + password)
      }),
    };
    console.log(httpOptions.headers.getAll('Authorization') + '   ' + email + '  ' + password);
    this._header = httpOptions;
    return httpOptions;
  }

  createJSONHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }

  login(email, password) {
    const urlPath = this.url + '/user/login';
    const httpOptions = this.createAuthenticationHeader(email, password);

    return this.http.get<UserModel>(urlPath, httpOptions);
  }

  register(registerModel: RegisterModel) {
    const urlPath = this.url + '/register';
    const httpOptions = this.createJSONHeader();

    return this.http.post<UserModel>(urlPath, registerModel, httpOptions);
  }

  getProducts() {
    const urlPath = this.url + '/product';
    const httpOptions = this.createJSONHeader();

    return this.http.get<ProductModel[]>(urlPath, httpOptions);
  }

  getCartProducts(email, password) {
    const urlPath = this.url + '/cart';
    const httpOptions = this.createAuthenticationHeader(email, password);

    return this.http.get<ProductModel[]>(urlPath, httpOptions);
  }

  addToCart(cartItem) {
    const urlPath = this.url + '/cart';
    return this.http.post<CartModel>(urlPath, cartItem, this._header);
  }

  checkout() {
    const urlPath = this.url + '/cart/checkout';
    return this.http.get<MessageModel>(urlPath, this._header);
  }
}
