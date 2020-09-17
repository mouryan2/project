
import { error } from '@angular/compiler/src/util';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user.model';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface userDetails {
  userId: String,
  token: String,
  expiresIn: any,
  role: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user = new BehaviorSubject<userDetails>(null);

  userSignup(user: User) {
    return this.http.post<User>('http://localhost:8080/user/signup', user);
  }

  userSignin(user: User) {
    return this.http.post<userDetails>('http://localhost:8080/user/signin', user)
      .pipe(
        catchError(error => {
          return throwError(error.error);
        }),
        tap(data => {
          localStorage.setItem("userData", JSON.stringify(data));
          this.user.next(data)
          this.router.navigate([""])
        })
      );
  }

  userLogout() {
    localStorage.removeItem('userData')
    this.user.next(null);
    this.router.navigate(["/auth"]);
  }

  // auto login even after refreshing page using local storage
  autoSignin() {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      this.user.next(user);
    }
  }

}
