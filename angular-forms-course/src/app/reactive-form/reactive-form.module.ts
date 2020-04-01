import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationValidator } from './reactive-form-demo/validate-duration.directive';



@NgModule({
  declarations: [ReactiveFormDemoComponent, DurationValidator],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ReactiveFormDemoComponent, DurationValidator]
})
export class ReactiveFormModule { }
