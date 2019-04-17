import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alertas: string[] = [
    'primary',
    'secondary',
    'warning',
    'info',
    'something'
  ];
  alerta: string;
  index: number = 0;
  alertaButton: string = "btn-danger"


  constructor() {
    this.alerta = this.alertas[0];


  }




  ngOnInit() {
  }

  cambiarLabel() {
    this.index++;
    if (this.index > (this.alertas.length - 1)) {
      this.index = 0;
    }
    this.alerta = this.alertas[this.index]
    // console.log(this.alerta, this.index);
    this.alertaButton = "btn-" + this.alerta;

  }


}

