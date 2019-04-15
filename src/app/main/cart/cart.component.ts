import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';
import {CartproductModel} from '../../models/cartproduct.model';
import {HttpClientService} from '../../services/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice = 0;
  private cartlist: ProductModel[] = [];
  cartlistfilterd: CartproductModel[] = [];
  message: string;

  constructor(private authService: AuthService, private cartService: CartService, private httpClientService: HttpClientService) {

  }

  ngOnInit() {
    this.cartlist = this.cartService.cartlist;
    console.error('before filtering' + this.cartlist);
    this.cartlistfilterd = this.sortList();
    this.totalPrice = this.calculatePrice();

    this.cartService.cartsubject.subscribe(meme => {
      if (meme === undefined) {
        this.cartlist = [];
      } else {
        this.cartlist = this.cartService.cartlist;
        console.error('after filtering' + this.cartlist);
        this.cartlistfilterd = this.sortList();
        this.totalPrice = this.calculatePrice();
      }
    });
  }

  calculatePrice() {
    let price = 0;
    this.cartlist.forEach((product: ProductModel) => {
      price = price + product.price;
    });
    return price;
  }

  sortList() {
    let meme1 = this.cartlist;
    meme1 = meme1.sort();
    let count = {};
    let temparray = [];

    meme1.forEach((meme: ProductModel) => {
      if (count[meme.productID] === undefined) {
        temparray.push(new CartproductModel(meme, -1));
      }
      count[meme.productID] = (count[meme.productID] || 0) + 1;
    });

    temparray.forEach((meme: CartproductModel) => {
      meme.amount = count[meme.product.productID];
      console.log('the title is: ' + meme.product.name + '\n' + 'the amount is: ' + meme.amount);
    });
    return temparray;
  }

  onCheckout() {
    this.httpClientService.checkout().subscribe((meme) => {
      this.message = meme['message'];
      if (this.message.includes('Checkout completed!')) {
        this.cartlistfilterd = [];
        this.cartService.clearList();
      }
    });
  }


}
