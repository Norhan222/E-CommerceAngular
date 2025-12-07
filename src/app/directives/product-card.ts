import { Directive, ElementRef, HostListener, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard implements OnInit,OnChanges {

 @Input() background:string='red';
  constructor(public element:ElementRef) {
        this.element.nativeElement.style.backgroundColor=`${this.background}`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.element.nativeElement.style.backgroundColor=this.background;
  }
  ngOnInit(): void {
    this.element.nativeElement.style.borderRadius='15px';
   this.element.nativeElement.style.boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }

@HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.35)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  }


}
