import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormDemoComponent } from './template-form-demo/template-form-demo.component';



@NgModule({
  declarations: [TemplateFormDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateFormDemoComponent]
})
export class TemplateFormModule { }
