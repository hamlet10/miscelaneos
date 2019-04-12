import { Directive, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private _elementRef:ElementRef ) { 
    console.log('directiva llamada');
    this._elementRef.nativeElement.style.background = "yellow"
    
  }

}
