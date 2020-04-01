import { Directive, HostBinding, Input, HostListener, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = true;
  @Output()
  toggleHighlight = new EventEmitter();
  constructor() {
    console.log('directive created...');
  }
  // @HostBinding('className')
  // cssClasses() {
  //   return 'highlighted';
  // }
  // @HostBinding('class.highlighted')
  // cssClasses() {
  //   return true;
  // }
  // @HostBinding('style.border')
  // get cssClasses() {
  //   return '1px solid red';
  // }
  // @HostBinding('style.border')
  // get cssClasses() {
  //   return this.isHighlighted;
  // }
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }
  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return 'true';
  // }
  // @HostListener('mouseover')
  // mouseOver() {
  //   this.isHighlighted = true;
  // }
  // @HostListener('mouseleave')
  // mouseLeave() {
  //   this.isHighlighted = false;
  // }
  // @HostListener('mouseover', ['$event'])
  // mouseOver($event) {
  //   console.log($event);
  //   this.isHighlighted = true;
  //   this.toggleHighlight.emit(this.isHighlighted.toString());
  // }
  // @HostListener('mouseleave')
  // mouseLeave() {
  //   this.isHighlighted = false;
  //   this.toggleHighlight.emit(this.isHighlighted.toString());
  // }
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted.toString());
  }


}
