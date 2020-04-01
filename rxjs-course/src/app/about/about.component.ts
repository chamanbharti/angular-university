import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, observable, noop } from 'rxjs';
import { response } from 'express';
import { createHttpObservable } from '../utils';
import { map } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   // what are streams
  // constructor() { }

  // ngOnInit() {

  //   document.addEventListener('click', event => {
  //     console.log(event);
  //   });

  //   let counter = 0;
  //   setInterval( () => {
  //     console.log(counter);
  //     counter++;
  //   }, 1000);

  //   setTimeout( () => {
  //     console.log('finished...');
  //   }, 3000);
  // }

    // What is RxJs? What Problem Does it Solve?
    // callback hell
    // ngOnInit() {

    //   document.addEventListener('click', event => {
    //     console.log(event);
    //     setTimeout( () => {
    //       console.log('finished...');
    //       let counter = 0;
    //       setInterval( () => {
    //         console.log(counter);
    //         counter++;
    //       }, 1000);
    //     }, 3000);
    //   });
    // }
    // What is an RxJs Observable? A Simple Explanation
    // ngOnInit() {
    //  const interval$ = interval(1000);
    //  interval$.subscribe(val => console.log('stream 1 => ' + val));
    //  interval$.subscribe(val => console.log('stream 2 => ' + val));
    // }

    // ngOnInit() {
    //   const interval$ = timer(3000, 1000);
    //   interval$.subscribe(val => console.log('stream 1 => ' + val));
    //   const click$ = fromEvent(document, 'click');
    //   click$.subscribe(evt => console.log(evt));
    //  }

    // 3 Core RxJs Concepts - Errors, Completion and Subscriptions
    // ngOnInit() {
    //   const interval$ = timer(3000, 1000);

    //   const sub = interval$.subscribe(val => console.log('stream 1 => ' + val));

    //   setTimeout( () => sub.unsubscribe(), 5000);

    //   const click$ = fromEvent(document, 'click');

    //   click$.subscribe(
    //     evt => console.log(evt),
    //     err => console.log(err),
    //     () => console.log('completed')
    //     );
    //  }

    //  // Learn How Observables Work Under the Hood, Build Your Own HTTP Observable
    //  ngOnInit() {
    //     const http$ = Observable.create( observer => {
    //       fetch('/api/courses')
    //       .then( response => {
    //         return response.json();
    //       })
    //       .then( body => {
    //         observer.next(body);
    //         observer.complete();
    //       })
    //       .catch(err => {
    //         observer.error(err);
    //       })
    //     });

    //     http$.subscribe(
    //       courses => console.log(courses),
    //       // err => console.log(err),
    //        noop,
    //       () => console.log('completed')
    //     );

    //  }
    // What are RxJs Operators? Learn the Map Operator
  //   ngOnInit() {
  //     const http$ = createHttpObservable('/api/courses');
      
  //     http$.subscribe(
  //       courses => console.log(courses),
  //       // err => console.log(err),
  //        noop,
  //       () => console.log('completed')
  //     );
  //  }

  ngOnInit() {
    // const http$ = createHttpObservable('/api/courses');
    // const courses$ = http$
    // .pipe(
    //   map( res => Object.values(res['payload']))
    // );
    // courses$.subscribe(
    //   courses => console.log(courses),
    //   // err => console.log(err),
    //    noop,
    //   () => console.log('completed')
    // );
 }
}
