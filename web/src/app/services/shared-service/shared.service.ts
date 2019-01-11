import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SocialUser } from 'angular-6-social-login';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // socialUser gets updated and other components can subscribe to currentUser and save user data in their own scope
  private socialUser: any = new BehaviorSubject(null);
  currentUser = this.socialUser.asObservable();

  constructor() { }

  setCurrentUser(user: SocialUser){
    this.socialUser.next(user);
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
