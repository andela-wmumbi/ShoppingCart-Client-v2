import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { SocialUser } from 'angular4-social-login';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDetails: {};
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(
    private authService: AuthService,
    private userservice: UserService,
    private router: Router,
  ) {
    this.userDetails = { o_auth_id: '', name: '', email: '' };
    // if (window.location.href.includes('logout')) {
    //   this.signOut();
    //   this.router.navigate(['/login']);
    // }
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  signInWithGoogle(): void {
    this.authService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((res) => {
        this.router.navigate(['/dashboard']);
        this.addUser(this.user);
      });
  }

  signOut(): void {
    this.authService.signOut();
    sessionStorage.removeItem('token');
  }

  addUser(user) {
    this.userDetails['name'] = user.name;
    this.userDetails['email'] = user.email;
    this.userDetails['o_auth_id'] = user.id;
    this.userservice
      .addUser(this.userDetails)
      .toPromise()
      .then(() => {
        sessionStorage.setItem('token', user.token);
      }
      );
  }
}
