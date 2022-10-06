import { Directive, ElementRef, HostListener ,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() appHighlight =''; 
  @Input() defaultcolor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultcolor || 'white');
    // this.highlight('yellow')
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}