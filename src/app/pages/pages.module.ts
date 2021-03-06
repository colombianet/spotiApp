import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoadingComponent } from '../shared/loading/loading.component';

import { NoImagePipe } from '../pipes/no-image.pipe copy';

@NgModule({
  declarations: [HomeComponent, SearchComponent, NoImagePipe, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
