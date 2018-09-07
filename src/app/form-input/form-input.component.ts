import { Component, OnInit } from '@angular/core';
import { Moment } from 'moment';
import {InputI} from '../models/models';
import {RegistratedService} from '../services/registrated.service';
import * as moment from 'moment'

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
/*import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

*/
@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  gender : string[] = ["Male", "Female"]

  maxDate: Moment;

  constructor(private registryS: RegistratedService) { }

  ngOnInit() {
    this.maxDate = moment().subtract(18,'years')
  }

  processFormInput(newInput:NgForm){
    this.registryS.AddRegistration(newInput.value);
    this.registryS.RetriveRegistration();

  }
}
