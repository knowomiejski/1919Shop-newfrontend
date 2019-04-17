import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartsubject: Subject<ProductModel>;
  cartlist: ProductModel[] = [];

  constructor() {
    this.clearList();
  }

  clearList() {
    this.cartlist = [];
    this.cartsubject = new Subject();
    this.cartsubject.asObservable();
    this.cartsubject.subscribe(product => {
      this.cartlist.push(product);
    });
  }


}
