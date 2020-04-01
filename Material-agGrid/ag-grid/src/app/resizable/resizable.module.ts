import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableColumnComponent } from './resizable-column/resizable-column.component';



@NgModule({
  declarations: [ResizableColumnComponent],
  imports: [
    CommonModule
  ],
  exports: [ResizableColumnComponent]
})
export class ResizableModule { }
