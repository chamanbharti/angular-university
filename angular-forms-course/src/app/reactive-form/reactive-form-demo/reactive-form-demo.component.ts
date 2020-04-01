import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Lesson, StudentLevel } from 'src/app/lesson';
import { Observable, concat, noop } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { validateDuration } from './validateDuration';
@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {
  // myForm: FormGroup;
  // lesson = new Lesson(
  //   'Tittle goes here',
  //   0,
  //   'Description goes here',
  //   StudentLevel.BEGINNER
  // );

  // constructor() {
  //   this.myForm = new FormGroup({
  //     title: new FormControl('This is the title'),
  //     duration: new FormControl(10),
  //     description: new FormControl('description goes here')
  //   });
  // }

  // ngOnInit(): void {
  // }
// Angular Form Validation in Model Driven Forms - Configuring a Form Validator
/*
In this tutorial we are going to learn how to configure form validation programmatically
in Angular model driven forms. we are are going to see how we use the standard Angular Validators
import to configure the several validators that we previously saw in action:
marking mandatory fields with required, minimum field length with minLength,
maximum field length with maxLength, and validating against a regular expression
using the pattern validator.
*/
  // myForm: FormGroup;
  // lesson = new Lesson(
  //   'Tittle goes here',
  //   0,
  //   'Description goes here',
  //   StudentLevel.BEGINNER
  // );

  // constructor() {
  //   this.myForm = new FormGroup({
  //     title: new FormControl('This is the title', [Validators.required, Validators.minLength(5)]),
  //     duration: new FormControl(10, [Validators.required, Validators.pattern('[0-9]+')]),
  //     description: new FormControl('description goes here', Validators.required)
  //   });
  // }

  // ngOnInit(): void {
  // }
  /* Building Reactive or Model Driven Forms using the FormBuilder
   In this tutorial we are going to learn how to we can configure model driven forms in a less
   verbose way by using a standard Angular injectable, the FormBuilder.
   We will see how the form builder provides a simplified builder API for
   configuring forms a bit more easilly than by calling the FormGroup and FormControl constructors.
  */
  // myForm: FormGroup;
  // lesson = new Lesson(
  //   'Tittle goes here',
  //   0,
  //   'Description goes here',
  //   StudentLevel.BEGINNER
  // );

  // constructor(fb: FormBuilder) {
  //   this.myForm = fb.group({
  //     title: ['This is the title', [Validators.required, Validators.minLength(5)]],
  //     duration: [10, [Validators.required, Validators.pattern('[0-9]+')]],
  //     description: ['description goes here', [Validators.required]]
  //   });
  // }

  // ngOnInit(): void {
  // }
  // Reactive Forms with RxJs - Learn Why They Are more Powerful than Template Driven
/*
In this tutorial we are going to learn why Angular model driven forms are also sometimes called
reactive forms. We are going to learn why these type of forms are more powerful
than template driven forms, and we are going to give a couple of examples of
common use cases where certain form functionality can be easily implemented
using RxJs and a reactive approach, while doing it in another way would be more complex.
We are going to show how forms and their controls can be represented as streams of values,
 and we will tap into the valueChanges observable available via the
Forms API to filter the form value but ony react to valid form values.
 */
//   myForm: FormGroup;
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: [10, [Validators.required, Validators.pattern('[0-9]+')]],
//       description: ['description goes here', [Validators.required]]
//     });
//     // How to use ValueChanges
//     // https://www.tektutorialshub.com/angular/valuechanges-in-angular-forms/
// // this.myForm.valueChanges.subscribe(x => {
// //    console.log('title value changed')
// //    console.log(x)
// // })
//     // this.myForm.get('title').valueChang, formValuees.subscribe(x => {
//     //   console.log('title value changed');
//     //   console.log(x);
//     // });

//     // this.myForm.valueChanges.
//     // .do(formValue => console.log('Valid Form Value:', formValue))
//     // .subscribe();

//     // this.myForm.valueChanges.filter( () => this.myForm.valid)
//     // .do(formValue => console.log('Valid Form Value:', formValue))
//     // .subscribe();

//     this.myForm.valueChanges.pipe(
//       .filter(() => this.myForm.valid)
//       .map(value => new Lesson()
//       .tap(formValue => console.log("Valid Form Value: ", formValue))
//       ).subscribe();
//   }

//   ngOnInit(): void {
//   }
// Angular Model Driven Forms - Mark Fields in Error
// myForm: FormGroup;
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: [10, [Validators.required, Validators.pattern('[0-9]+')]],
//       description: ['description goes here', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {
//   }

// Angular Model Driven Forms - The formControl Directive
// myForm: FormGroup;
// duration = new FormControl(10,
//   [Validators.required, Validators.pattern('[0-9]+')]
//   );
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER 
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: this.duration,
//       description: ['description goes here', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {
//   }

// Angular Model Driven Form Custom Validator
// myForm: FormGroup;
// duration = new FormControl(10, [validateDuration]);
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER 
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: this.duration,
//       description: ['description goes here', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {
//   }

// myForm: FormGroup;
// duration = new FormControl(10, [validateDuration]);
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER 
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: this.duration,
//       description: ['description goes here', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {
//   }
//   summaryStatus(summary) {

//   }

  // Angular Model Driven Forms - How to Set a Form Value and Reset a Form
//   myForm: FormGroup;
// duration = new FormControl(10, [validateDuration]);
//   lesson = new Lesson(
//     'Tittle goes here',
//     0,
//     'Description goes here',
//     StudentLevel.BEGINNER 
//   );

//   constructor(fb: FormBuilder) {
//     this.myForm = fb.group({
//       title: ['This is the title', [Validators.required, Validators.minLength(5)]],
//       duration: this.duration,
//       description: ['description goes here', [Validators.required]]
//     });
//   }

//   ngOnInit(): void {
//   }
//   summaryStatus(summary) {

//   }
//   partialUpdate() {
//     this.myForm.patchValue( {
//       title: 'Set Form Values',
//       duration: 5
//     });
//   }

//   fullUpdate() {
//     this.myForm.setValue( {
//       title: 'Set Form Values',
//       duration: 50,
//       description: 'new Description'
//     });
//   }
//   reset() {
//     this.myForm.reset();
//   }

// signup = {};

  constructor() {
  }

  ngOnInit(): void {
  }
//   signUp() {
//     console.log('Sign up data: ', this.signUp);
//   }

}
