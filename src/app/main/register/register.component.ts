import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/register.model';
import {HttpClientService} from '../../services/http-client.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password1 = '';
  password2 = '';
  province = '';
  city = '';
  street = '';
  housenr = '';
  message = '';
  registerModel: RegisterModel;

  constructor(private httpClientService: HttpClientService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onRegister() {

    if (
      this.email === '' ||
      this.password1 === '' ||
      this.password2 === '' ||
      this.province === '' ||
      this.city === '' ||
      this.street === '' ||
      this.housenr === ''
    ) {
      this.message = 'Fill in all fields to register.';
    } else {
      if (this.password1 === this.password2 &&
        this.password1.match('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')) {
        this.registerModel = new RegisterModel(this.email, this.password1, this.province, this.city, this.street, this.housenr);
        this.httpClientService.register(this.registerModel).subscribe(user => {
          this.authService.login(this.email, this.password1);
          this.router.navigate(['/shop']);
        },
        () => {
          this.message = 'Check the fields and try again.';
        });

      } else {
        this.message = 'Check password';
      }
    }
  }

}
