import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import { createHttpObservable } from '../utils';
import { Observable, of, concat, noop } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnersCourses: Course[];
    advancedCourses: Course[];
    constructor() { }

    ngOnInit() {
    const http$ = createHttpObservable('/api/courses');
    const courses$ = http$
    .pipe(
      map( res => Object.values(res['payload']))
    );
    courses$.subscribe(
      courses => {
          this.beginnersCourses = courses.filter(course => course.category =='BEGINNER');
          this.advancedCourses = courses.filter(course => course.category =='ADVANCED');
      },
       noop,
      () => console.log('completed')
    );
    }

    // beginnersCourses$: Observable<Course[]>;
    // advancedCourses$: Observable<Course[]>;
    // constructor() {

    // }

    // ngOnInit() {
    // const http$: Observable<Course[]> = createHttpObservable('/api/courses');
    // const courses$: Observable<Course[]> = http$
    // .pipe(
    //   map( res => Object.values(res['payload']))
    // );
    // //courses$.subscribe();
    // this.beginnersCourses$ = courses$
    // .pipe(
    //     map(courses => courses.filter(course => course.category == 'BEGINNER'))
    // );
    // this.advancedCourses$ = courses$
    // .pipe(
    //     map(courses => courses.filter(course => course.category == 'ADVANCED'))
    // );

    // }
// Sharing HTTP Responses with the shareReplay Operator
    // beginnersCourses$: Observable<Course[]>;
    // advancedCourses$: Observable<Course[]>;
    // constructor() {}

    // ngOnInit() {
    // const http$: Observable<Course[]> = createHttpObservable('/api/courses');

    // const courses$: Observable<Course[]> = http$
    // .pipe(
    //   tap( () => console.log('HTTP request executed')),
    //   map( res => Object.values(res['payload'])),   
    //   shareReplay()
    // );
    // courses$.subscribe();
    // this.beginnersCourses$ = courses$
    // .pipe(
    //     map(courses => courses.filter(course => course.category == 'BEGINNER'))
    // );
    // this.advancedCourses$ = courses$
    // .pipe(
    //     map(courses => courses.filter(course => course.category == 'ADVANCED'))
    // );

    // Observable Concatenation - In-Depth Explanation
    // beginnersCourses$: Observable<Course[]>;
    // advancedCourses$: Observable<Course[]>;
    // constructor() {}

    // ngOnInit() {
    //     const source1$ = of(1, 2, 3);
    //     const source2$ = of(4, 5, 6);
    //     const source3$ = of(7, 8, 9);
    //     const result$ = concat(source1$, source2$, source3$);
    //     // result$.subscribe(
    //     //     val => console.log(val)
    //     // );
    //     result$.subscribe(console.log);
    // }
}
