/**
 * Created by Sergio Enriquez on 07/09/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'placeholder'
})

export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, defecto: string): string {
    return (value)? value:defecto;
  }
}
