import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  //se crea una nueva variable pero con tipo booleana
  hayError: boolean = false;
  paises : Country[] = [];
  placeholder: string = 'Por pais...';

  constructor( private paisService: PaisService  ) { }

  buscar( termino: string ){
    //se genera el false antes del click para que valide la variable booleana
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( this.termino )
    //es necesario el .suscribe() para utilizar el servicio
    .subscribe( (paises) =>{
      this.paises = paises;
      
    }, ( err ) =>{
      //si es contraria a true se habilita el error
      this.hayError = true;
      
      
    });
  }

  sugerencias( termino: string){
    this.hayError = false;
    //TODO: crear sugerencias
  }


}
