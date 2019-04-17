import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _activateRoute: ActivatedRoute) { 
    this._activateRoute.params.subscribe( paramametros => {console.log('ruta padre')
    console.log(paramametros);
    
  });
   
    
  }

  ngOnInit() {
  }

}
