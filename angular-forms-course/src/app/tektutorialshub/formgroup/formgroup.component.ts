import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent implements OnInit {
  address = new FormGroup({
    street: new FormControl("dfd"),
    city: new FormControl("sdfd"),
    pincode: new FormControl("sdfd")
  });
  constructor() { }

  ngOnInit(): void {
  }

}
