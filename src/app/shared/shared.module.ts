import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';
import { NoimagePipe } from '../pipes/no-image.pipe';
import { DomseguroPipe } from '../pipes/domseguro.pipe';

@NgModule({
  declarations: [NavbarComponent, ArtistComponent, NoimagePipe, DomseguroPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    NavbarComponent
  ]
})
export class SharedModule { }
