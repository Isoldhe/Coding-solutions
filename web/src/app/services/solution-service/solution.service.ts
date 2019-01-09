import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Subject } from 'rxjs/internal/Subject';

import { Solution } from '../../model/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  private eventCallback = new Subject<Solution[]>(); // Source
  eventCallback$ = this.eventCallback.asObservable(); // Stream

  constructor(private http: HttpClient) { }

  solutions: Solution[];

  getMessage(): Observable<any> {
    return this.http.get('http://localhost:8080/test').pipe(
      catchError(this.errorHandler));
  }

  getAllSolutions() {
    this.findAll().subscribe(
      solutions => {
        this.solutions = solutions;
        this.eventCallback.next(this.solutions);
      },
      err => {
        console.log(err);
      }
    );
  }

  findAll(): Observable<Solution[]>  {
    return this.http.get<Solution[]>('http://localhost:8080/all-solutions').pipe(
      catchError(this.errorHandler));
  }

  findById(id: number): Observable<Solution>  {
    console.log("inside findById. id = " + id);
    return this.http.get<Solution>('http://localhost:8080/solution-detail/' + id).pipe(
      catchError(this.errorHandler));
  }

  saveNewSolution(solution: Solution) {
    console.log('saved solution = ');
    console.log(solution);
    return this.http.post('http://localhost:8080/solution', solution).pipe(
      catchError(this.errorHandler));
  }

  updateSolution(id: number, solution: Solution) {
    return this.http.put('http://localhost:8080/solution/' + id, solution).pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id) {
    return this.http.delete('http://localhost:8080/solution/' + id).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
