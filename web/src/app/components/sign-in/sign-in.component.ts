import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

import { SignInService } from 'src/app/shared';
import { Token } from '../../model/token';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  providers: [SignInService]
})
export class SignInComponent implements OnInit {
  token: Token = new Token("");

  constructor(private socialAuthService: AuthService,
    private signInService: SignInService) {
  }

  ngOnInit() {
    
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.token.idToken = userData.idToken;

        this.signInService.signIn(this.token).subscribe(onSuccess => {
          console.log("Login was successful");
        }, onFail => {
          console.log("Login failed");
        });
      }
    );
  }

  signOut(): void {
    this.socialAuthService.signOut(); 
   }

}
