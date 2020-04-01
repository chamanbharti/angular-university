import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {
  visible = false;
  constructor(private tempalateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.tempalateRef);
      this.visible = true;
    } else if(condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
