import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {HttpClientService} from './http-client.service';
import {Subject} from 'rxjs';
import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 1 = not logged in
  // 2 = wrong credentials
  // 3 = logged in
  isLoggedIn: Subject<number>;
  role: Subject<boolean>;

  constructor(private httpClientService: HttpClientService, private cartService: CartService) {
    this.isLoggedIn = new Subject();
    this.isLoggedIn.asObservable();
    this.isLoggedIn.next(1);

    this.role = new Subject();
    this.role.asObservable();
    this.role.next(false);
  }

  private _loggedInUser: UserModel;

  get loggedInUser(): UserModel {
    return this._loggedInUser;
  }

  login(email, password) {
    this.isLoggedIn.next(1);
    console.log('in authService Login');
    this.httpClientService.login(email, password).subscribe(
      user => {
        console.log('got user');
        this._loggedInUser = user;
      },
      () => {
        console.log('Wrong Email or Password');
        this.isLoggedIn.next(2);
      },
      () => {
        this.isLoggedIn.next(3);
      });

    this.isLoggedIn.subscribe(meme => {
      if (meme === 3) {
        console.log(this.loggedInUser.roles);
        if (this.loggedInUser.roles.indexOf('Admin') > -1) {
          this.role.next(true);
        } else {
          this.role.next(false);
        }
      }
    });
  }

  logout() {
    this.httpClientService._header = undefined;
    this.cartService.clearList();
    localStorage.clear();
    console.log('After logout: ' + this.cartService.cartlist);
    this._loggedInUser = undefined;
    this.isLoggedIn.next(1);
    this.role.next(false);
  }

}
