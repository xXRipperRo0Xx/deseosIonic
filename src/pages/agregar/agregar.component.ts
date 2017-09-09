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

  nombreLista:string;
  nombreItem:string = "";

  items:ListaItem[] = [];


  constructor(alertController:AlertController,
              listaDeseosService:ListaDeseosService,
              navController:NavController) {
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
    if( this.nombreItem.length == 0){
      return;
    }
  }

}
