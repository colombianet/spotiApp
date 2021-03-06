import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  // Hice una copia ya que el mismo pipe necesitaba usarlo en 2 modulos: pagesModule y sharedModule

  transform(images: any[]): unknown {
    return (images.length === 0) ? 'assets/img/noimage.jpg' : images[0].url;
  }

}
