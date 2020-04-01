import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('Chaman'),
    cities: new FormArray([
      new FormControl('Mumbai'),
      new FormControl('Delhi')
    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
