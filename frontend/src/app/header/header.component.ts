import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  loggedIn: boolean = false;
  ngOnInit(): void {
    this.authService.user.subscribe(data => {
      if (data) {
        this.loggedIn = true;
      }
    })
  }

  logout() {
    this.authService.userLogout();
    this.loggedIn = false;
  }
}
