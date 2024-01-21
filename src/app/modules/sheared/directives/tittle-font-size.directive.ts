import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTittleFontSize]'
})
export class TittleFontSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
   }

}
