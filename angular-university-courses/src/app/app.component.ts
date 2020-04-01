import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  // courses = COURSES;
  // startDate = new Date(2020, 3, 6);
  // price = 9.7;
  // course = COURSES[0];
  // viewChild
  // @ViewChild(CourseCardComponent)
  // card: CourseCardComponent;
  // @ViewChild('cardRef')
  //  card: CourseCardComponent;
  //   @ViewChild('cardRef1', {read: ElementRef, static: true})
  // card1: ElementRef;
  // @ViewChild('container', {static: true})
  // containerDiv: ElementRef;
  // constructor() {
  //   console.log('card1:' + this.card1);
  //   console.log('containerDiv:' + this.containerDiv);
  // }
  // viewChildren
  //  courses = COURSES;
  // @ViewChildren(CourseCardComponent)
  // cards: QueryList<CourseCardComponent>;
  // @ViewChildren(CourseCardComponent, {read: ElementRef})
  // cards: QueryList<ElementRef>;
  // @ViewChild(HighlightedDirective, {static: false})
  // highlighted: HighlightedDirective;
  // @ViewChild(HighlightedDirective, {read: HighlightedDirective, static: true})
  // highlighted: HighlightedDirective;
  // constructor() {
  // }
  // ngOnInit() {

  // }

  // ngAfterViewInit(): void {
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // );
    // console.log(this.cards);
    // console.log(this.highlighted);
 // }
  // onCourseEdit() {
  //   this.courses.push(
  //     {
  //       id: 1,
  //       description: 'Angular Core Deep Dive',
  //       iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
  //       longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
  //       category: 'INTERMEDIATE',
  //       lessonsCount: 10
  //     },
  //   );
  // }
  // onCourseSelected(course: Course) {
    // console.log('onCardClicked app component.. button clicked..', course);
    // console.log('viewChild')
    // console.log('card1' + this.card1.course);
    // console.log('card2' + this.card2);
   // console.log('containerDiv:' + this.containerDiv);
  // }
  // onCardClicked() {
  //   console.log('App component click event bubbled...');
  //   // this.courseEmitter.emit(this.course);
  // }
// courses = COURSES;
//   courses;
// startDate = new Date(2000, 0, 1);
// title = COURSES[0].description;
// price = 9.99;
// rate = 0.67;
// course = COURSES[0];
//
//   constructor(private http: HttpClient) {
//   }
//   onCourseSelected(course: Course) {
//     console.log('onCardClicked app component.. button clicked..', course);
//   }
//   ngOnInit(): void {
//     // this.http.get('api/courses')
//     //   .subscribe( val => console.log(val)
//     //   );
//     this.http.get('api/courses')
//       .subscribe( courses => this.courses = courses
//       );
//   }

// directive
// onToggle(isHighlighted: boolean) {
  // console.log(isHighlighted);
// }

// using service
// courses = COURSES;
// constructor( private http: HttpClient) {
// }
// ngOnInit() {
//   this.http.get('/api/courses')
//   .subscribe(
//     val => console.log(val)
//   );
// }

// courses;
// constructor( private http: HttpClient) {
// }
// ngOnInit() {
//   this.http.get('/api/courses')
//   .subscribe(
//     courses => this.courses = courses
//   );
// }
// }

// courses;
// constructor( private http: HttpClient) {
// }
// ngOnInit() {
//   const params = new HttpParams()
//   .set('page', '1')
//   .set('pageSize', '10');
//   this.http.get('/api/courses', {params})
//   .subscribe(
//     courses => this.courses = courses
//   );
// }

courses$: Observable<Course[]>;
constructor( private http: HttpClient) {
}
ngOnInit() {
  const params = new HttpParams()
  .set('page', '1')
  .set('pageSize', '10');
  this.courses$ = this.http.get<Course[]>('/api/courses', {params});
}
}
