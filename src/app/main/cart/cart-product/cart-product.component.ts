import {Component, Input, OnInit} from '@angular/core';
import {CartproductModel} from '../../../models/cartproduct.model';
import {ProductModel} from '../../../models/product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input('cartproduct')
  cartproduct: CartproductModel;
  product: ProductModel;
  price;

  constructor() {
  }

  ngOnInit() {
    this.product = this.cartproduct.product;
    this.price = this.product.price * this.cartproduct.amount;
    this.price = this.price.toFixed(2);
  }

}
