import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
    p{
      color: red;ng 
      font-size: 20px
    }
    `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
