import {Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';
import {ProductModel} from '../models/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: ProductModel[] = [];
  currentProductList: Subject<string>;

  constructor(private httpClientService: HttpClientService) {
    this.currentProductList = new Subject();
    this.currentProductList.asObservable();
    this.currentProductList.next('not loaded');
  }

  loadProducts() {
    this.httpClientService.getProducts().subscribe(productlist => {
      this.productList = productlist;
      this.currentProductList.next('loaded');
    }, () => {
      this.currentProductList.next('error');
      console.log('cant retrieve items');
    });
  }

  getProducts() {
    return this.productList;
  }
}
