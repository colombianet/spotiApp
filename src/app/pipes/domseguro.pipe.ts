import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private higienizador: DomSanitizer ) {}

  transform(value: string): any {
    const url = `https://open.spotify.com/embed?uri=`;

    return this.higienizador.bypassSecurityTrustResourceUrl(url + value);
  }

}
