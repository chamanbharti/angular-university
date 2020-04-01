import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { FormarrayComponent } from './formarray/formarray.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormcontrolComponent, FormgroupComponent, FormarrayComponent],
  imports: [
    CommonModule,
   // FormsModule,
   // ReactiveFormsModule,
  ],
  exports: [FormcontrolComponent, FormgroupComponent]
})
export class TektutorialshubModule { }
