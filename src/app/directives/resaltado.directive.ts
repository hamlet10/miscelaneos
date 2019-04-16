import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor:string;

  constructor( private _elementRef:ElementRef ) { 
    console.log('directiva llamada');
    // this._elementRef.nativeElement.style.background = "yellow";
    
  }

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar( this.nuevoColor || 'yellow')
    // this._elementRef.nativeElement.style.background = "yellow";
  }

  @HostListener('mouseleave') mouseSale(){
    this._elementRef.nativeElement.style.background = null;
  }

  private resaltar( color:string){
    this._elementRef.nativeElement.style.background = color;
  }

}
