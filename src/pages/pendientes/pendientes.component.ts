/**
 * Created by Sergio Enriquez on 07/09/2017.
 */
import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from  '../../app/services/lista-deseos.service';

import { AgregarComponent } from '../agregar/agregar.component';





@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
  constructor( private listaDeseosService:ListaDeseosService,
               private navCtrl: NavController ) {
  }

  ngOnInit() {
  }

  irAgregar(){
    this.navCtrl.push( AgregarComponent );
  }
}

