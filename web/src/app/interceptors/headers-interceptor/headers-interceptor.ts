import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolutionService } from '../../shared';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  // Any http request gets intercepted here for modification in the headers

  constructor(public solutionService: SolutionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new responseType
    const clonedRequest = req.clone({
      // headers: req.headers.set('Content-Type', 'application/json'),
      // responseType: 'text'
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
