import { Injectable } from '@angular/core';
import {InputI} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegistratedService {

  private registered : InputI [] = [];

  constructor() { }

  AddRegistration(n:InputI){
    this.registered.push(n);
  }

  RetriveRegistration(){
    this.registered.forEach((x,i) => {
      console.log('Entry#: ', i);
      console.log(x);
    });
  }
}
