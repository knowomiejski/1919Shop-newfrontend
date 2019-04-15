import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedIn: boolean;
  isAdmin: boolean;

  constructor(private authService: AuthService, private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    this.authService.role.subscribe(role => {
      this.isAdmin = role;
    });
    this.authService.isLoggedIn.subscribe(loggedIn => {
      if (loggedIn === 3) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  shop() {
    console.log('click');
    this.categoryService.activeCategory.next('reload');
  }
}
