import { Injectable } from '@angular/core';
import {InputI} from '../models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistratedService {

  constructor(private http: HttpClient) { }

  AddRegistration(n:InputI){
    return this.http.post(`${environment.api_url}submit`, n);
  }

}
