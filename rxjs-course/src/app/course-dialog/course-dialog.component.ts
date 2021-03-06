import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {fromEvent} from 'rxjs';
import {concatMap, distinctUntilChanged, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit, AfterViewInit {

    form: FormGroup;
    course:Course;

    @ViewChild('saveButton', { static: true }) saveButton: ElementRef;

    @ViewChild('searchInput', { static: true }) searchInput : ElementRef;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course:Course ) {

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

    }
// Form Draft Pre-Save Example and the RxJs Filter Operator
    ngOnInit() {
        // this.form.valueChanges.subscribe(console.log);

        // this.form.valueChanges
        // .pipe(
        //     filter( () => this.form.valid)
        // )
        // .subscribe(console.log);

        this.form.valueChanges
        .pipe(
            filter( () => this.form.valid)
        )
        .subscribe(changes => {
         const saveCourses$ =  fromPromise(
                fetch(`/api/courses/${this.course.id}`, {
                method: 'PUT',
                body: JSON.stringify(changes),
                headers: {
                    'content-type': 'application/json'
                }
            }) );
            saveCourses$.subscribe();
        });


    }



    ngAfterViewInit() {


    }



    close() {
        this.dialogRef.close();
    }

}
