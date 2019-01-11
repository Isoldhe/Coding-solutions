import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';

import { SignInService, Token, NavBarService, SharedService } from 'src/app/shared';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  token: Token = new Token("");
  user: SocialUser

  constructor(private socialAuthService: AuthService,
    	        private signInService: SignInService,
	            private sharedService: SharedService,
              public navBar: NavBarService,
              private router: Router) {
  }

  ngOnInit() {
    this.navBar.hide();
    this.signOut();
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.token.idToken = userData.idToken;

        this.signInService.signIn(this.token).subscribe(onSuccess => {
          console.log("Login was successful");
          this.user = userData;

          // Saving user in localstorage
          localStorage.setItem('currentUser', JSON.stringify(this.user));

          // Saving user to shared service so other components can get to user data
          this.sharedService.setCurrentUser(this.user);

          // Login successful and AuthGuard's canActivate() returns true, so redirect to /solutions-list
          this.router.navigate(['/solutions-list']);
        }, onFail => {
          console.log("Login failed");
        });
      }
    );
  }

  signOut(): void {
    // this.socialAuthService.signOut();
    this.user = null;
    localStorage.removeItem('currentUser');

    this.router.navigate(['/sign-in']);

    console.log("user signed out: ");
    console.log(localStorage.getItem('currentUser'));
   }

}