import { Component, EventEmitter } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  taxistas:any[] = [];
  taxistaSeleccionado:any = {};

  siguiendo:boolean = false;

  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor( af: AngularFire ){

    af.database.list('/usuarios')
              .subscribe( taxistas=>{

          console.log(taxistas);
          this.taxistas = taxistas;

          if( this.siguiendo ){
            // Si estoy siguiendo a alguien
            for( let taxista of taxistas ){
              if( taxista.$key === this.taxistaSeleccionado.$key ){
                this.lat = taxista.lat;
                this.lng = taxista.lng;
              }
            }
          }


      })

  }


  seguir_taxista( taxista:any ){

    this.lat = taxista.lat;
    this.lng = taxista.lng;

    this.siguiendo = true;

    this.taxistaSeleccionado = taxista;

  }

  dejar_seguir(){

    this.siguiendo = false;
    this.taxistaSeleccionado = {};

  }



}
