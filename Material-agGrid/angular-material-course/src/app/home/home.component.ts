import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {COURSES} from "../model/db-data";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
debugger
    beginnerCourses: Course[];

    advancedCourses: Course[];

    constructor() {

    }

    ngOnInit() {
        debugger
        const courses:any = Object.values(COURSES);
        console.log(courses);
        this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');

        this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
    }

}
