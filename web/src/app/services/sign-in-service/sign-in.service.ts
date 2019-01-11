import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

import { Token } from '../../model/token';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  signIn(token: Token) {
    console.log("idToken= " + token.idToken);
    // Angular makes me send a json, instead of a string, so I had to correct that in the backend (see Spring's UserController)
    return this.http.post('http://localhost:8080/google-sign-in', token).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}