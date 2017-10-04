/**
 * Created by Sergio Enriquez on 07/09/2017.
 */
import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

import {Lista, ListaItem} from '../../app/clases/index';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];


  constructor(public alertController:AlertController,
              public listaDeseosService:ListaDeseosService,
              public navController:NavController) {
  }

  ngOnInit() {}

  agregar() {
    if( this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = '';

  }

  eliminar(item:number){
    this.items.splice(item,1);
  }

  guadarLista(){
      if( this.nombreLista.length == 0){
        let alert = this.alertController.create({
          title: 'Nombre de la lista',
          subTitle: 'El nombre de la lista es necesesario',
          buttons: ['Ok']
        });
        alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    // this.listaDeseosService.listas.push( lista );
    this.listaDeseosService.agregarLista( lista );
    this.navController.pop();
  }

}
