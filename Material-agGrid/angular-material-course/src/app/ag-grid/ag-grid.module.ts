import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloGridComponent } from './hello-grid/hello-grid.component';



@NgModule({
  declarations: [HelloGridComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HelloGridComponent
  ]
})
export class AgGridModule { }
