import { Injectable } from '@angular/core';
import {InputI} from '../models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RegistratedService {

  /*
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
};
  */

  constructor(private http: HttpClient) { }

  AddRegistration(n:InputI):Observable<InputI>{
    return this.http.post<InputI>(`${environment.api_url}submit`, n);
    /*.pipe(
      catchError(this.handleError(' AddRegistration',n))
    );*/
  }


  
}
