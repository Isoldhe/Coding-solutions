import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  signIn(idToken: string) {
    console.log("idToken= " + idToken);
    // Angular makes me send a json, instead of a string, so I had to correct that in the backend (see Spring's UserController)
    return this.http.post('http://localhost:8080/google-sign-in', {token: idToken}).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
