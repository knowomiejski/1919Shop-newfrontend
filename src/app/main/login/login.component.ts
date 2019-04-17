import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {HttpClientService} from '../../services/http-client.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  message: string;

  constructor(private authService: AuthService, private httpClientService: HttpClientService,
              private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
  }

  onClickLogin() {
    this.authService.isLoggedIn.subscribe(login => {
      if (login === 3) {
        this.httpClientService.getCartProducts(this.email, this.password).subscribe(cartlist => {
          cartlist.forEach(product => {
            this.cartService.cartsubject.next(product);
          });
        });
        this.router.navigate(['/shop']);
      } else if (login === 2) {
        this.message = 'Wrong email or password.';
      }
    });
    this.authService.login(this.email, this.password);
  }
}
