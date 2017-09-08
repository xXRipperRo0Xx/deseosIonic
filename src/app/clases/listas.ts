/**
 * Created by Sergio Enriquez on 07/09/2017.
 */
import { ListaItem } from './lista-item';

export class Lista{
  nombre: string;
  terminada: boolean;
  items: ListaItem[];

  constructor( nombres:string ){
    this.nombre = nombres;
    this.terminada = false;
  }

}
