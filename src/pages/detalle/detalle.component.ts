/**
 * Created by Sergio Enriquez on 03/10/2017.
 */
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { Lista , ListaItem } from '../../app/clases/index';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;


  constructor(public navCtrl:NavController,
              public navPrms:NavParams,
              public listaDeseosService:ListaDeseosService,
              public alertCtrl:AlertController ) {

    this.idx = navPrms.get("idx");
    this.lista = navPrms.get("lista");

    console.log(navPrms);
  }

  ngOnInit() {
  }

  actualizar( item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for ( let item of this.lista.items) {
      if( !item.completado ){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;
    this.listaDeseosService.actualizarData();
  }

  borrarItem() {
    this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Esta seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            // console.log('Agree clicked');
            this.listaDeseosService.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    }).present();
  }

}
