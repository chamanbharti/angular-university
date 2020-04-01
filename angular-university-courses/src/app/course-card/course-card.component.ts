import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  AfterViewInit,
  ContentChild,
  ElementRef,
  ContentChildren, AfterContentInit, QueryList, TemplateRef
} from '@angular/core';
import { Course } from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  // @Input()
  // title: string;
  @Input()
  course: Course;
  // tslint:disable-next-line: no-output-rename
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  @Input()
  cardIndex: number;
  // ContentChild
  // @ContentChild('courseImage', {static: false})
  // @ContentChild('container', {static: false})
  // @ContentChild(CourseImageComponent, {static: false})
  // @ContentChild(CourseImageComponent, {static: false, read: ElementRef})
  // // image: CourseImageComponent;
  // image: ElementRef;
  // @ContentChildren(CourseImageComponent)
  // // image: CourseImageComponent;
  // // image;
  // image: QueryList<CourseImageComponent>;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  image: QueryList<ElementRef>;
  @Input()
  noImageTpl: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
   // console.log(this.image);
  }
  ngAfterContentInit(): void {
   // console.log(this.image);
  }
  onCourseViewed() {
    // console.log('Card component.. button clicked..');
     this.courseEmitter.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  // [ngClass]
  cardClasses() {
    // return {
    //   'beginner': false,
    //   'course-card': true
    // };
    // return {
    //   'beginner': this.course.category == 'BEGINNER',
    //   'course-card': true
    // };
    // return {
    //   'beginner': this.course.category == 'BEGINNER'
    // };
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
  cardStyles() {
   // return {
   //   'text-decoration': 'underline'
   // };
   //  return {
   //    'background-image': 'url('+ this.course.iconUrl +')',
   //  };
  }


}
