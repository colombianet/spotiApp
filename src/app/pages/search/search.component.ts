import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean | undefined;

  constructor( private spoty: SpotifyService ) { }

  ngOnInit(): void {
  }

  search( busqueda: string ): void {
    this.loading = true;

    if ( busqueda.length === 0 ) {
      this.loading = false;
      this.artists = [];
      return;
    } else {
      this.spoty.getArtists( busqueda ).subscribe(resp => {
        this.artists = resp;
        this.loading = false;
      });
    }
  }

}
