import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moment } from 'moment';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  gender : string[] = ["Male", "Female"]

  constructor() { }

  ngOnInit() {
  }

  processFormInput(newInput:NgForm){
    console.log(newInput.value);
  }
}
