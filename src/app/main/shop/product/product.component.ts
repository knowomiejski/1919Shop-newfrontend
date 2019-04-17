import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductModel} from '../../../models/product.model';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart.service';
import {HttpClientService} from '../../../services/http-client.service';
import {CartModel} from '../../../models/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product')
  product: ProductModel;
  pictureSafe: SafeStyle;

  constructor(private sanitizer: DomSanitizer, private authService: AuthService,
              private httpClientService: HttpClientService, private router: Router,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.pictureSafe = this.sanitizer.bypassSecurityTrustStyle(' url(data:image/jpg;base64,' + this.product.picture + ')');
  }

  onAddToCart() {
    if (this.authService.loggedInUser !== undefined) {
      const cartItem = new CartModel(this.authService.loggedInUser.userID, this.product.productID , -1);
      this.httpClientService.addToCart(cartItem).subscribe(meme => {
        this.cartService.cartsubject.next(this.product);
      });
    } else {
        this.router.navigate(['/login']);
    }
  }

}
