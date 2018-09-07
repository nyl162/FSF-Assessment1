import { Injectable } from '@angular/core';
import {InputI} from '../models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistratedService {

  private registered : InputI [] = [];

  constructor(private http: HttpClient) { }

  AddRegistration(n:InputI){
    /*console.log('date format' , n.dob.format("DD/MM/YYYY"))
    n.forEach(x => {

      
    });*/
    this.registered.push(n);
    this.http.post(`${environment.api_url}submit`, "test");
  }

  RetriveRegistration(){
    this.registered.forEach((x,i) => {
      console.log('Entry#: ', i);
      console.log(x);
    });
  }
}
