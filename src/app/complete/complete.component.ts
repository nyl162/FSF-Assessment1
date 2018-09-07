import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  Name:string;

  constructor( private activatedRoute:ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.Name = this.activatedRoute.snapshot.params.name
  }

}
