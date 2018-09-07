import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moment } from 'moment';
import {InputI} from '../models/models';
import {RegistratedService} from '../services/registrated.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  gender : string[] = ["Male", "Female"]

  constructor(private registryS: RegistratedService) { }

  ngOnInit() {
  }

  processFormInput(newInput:NgForm){
    this.registryS.AddRegistration(newInput.value);
    this.registryS.RetriveRegistration();

  }
}
