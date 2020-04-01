import { Component, OnInit } from '@angular/core';
import {COURSES} from "../../db-data";
import {Course} from "../model/course";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  courses = COURSES;
  startDate = new Date(2020, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
