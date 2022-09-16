import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    console.log('@Directive @HostListener mouseenter');
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('@Directive @HostListener mouseleave');
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  constructor(private elementRef: ElementRef) {
    console.log('@Directive HighlightDirective');
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
