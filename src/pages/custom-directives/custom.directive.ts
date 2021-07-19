import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() defaultColor = '';

  @Input('appCustom') appCustom = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appCustom || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
