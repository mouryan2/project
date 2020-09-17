import { error } from '@angular/compiler/src/util';
import { AuthService } from '../shared/services/auth.service'
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loggedIn: boolean = false;
  isLoading: boolean = false;
  switchLog() {
    this.loggedIn = !this.loggedIn;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    this.isLoading = true;
    if (!this.loggedIn) {
      this.authService.userSignup(new User(form.value.userId, form.value.password))
        .subscribe(
          res => {console.log(res)},
          error => {alert(error)}
        );
      this.isLoading = false;
    } else {
      this.authService.userSignin(new User(form.value.userId, form.value.password))
        .subscribe(res => console.log(res));
      this.isLoading = false
    }

  }

}
