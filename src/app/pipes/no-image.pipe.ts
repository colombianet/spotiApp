import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): unknown {
    return (images.length === 0) ? 'assets/img/noimage.jpg' : images[0].url;
  }

}
