import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta:string[] =[
    'primary',
    'secondary',
    'warning',
    'info',
    'something'
  ];

  constructor() { }

  ngOnInit() {
  }

  cambiarLabel(){
  let i =0

}
}

