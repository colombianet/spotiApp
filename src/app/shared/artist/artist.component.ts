import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  topTracks: any;
  loading: boolean | undefined;

  constructor( private aRoute: ActivatedRoute, private spoty: SpotifyService, private location: Location ) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(p => {
      this.loading = true;
      const id = p.id;

      this.spoty.getArtistById( id ).subscribe( resp => {
        this.artist = resp;
      });

      this.spoty.getTopTracks( id).subscribe( resp => {
        this.topTracks = resp;
        this.loading = false;
      });
    });

  }

  goBack(): void {
    this.location.back();
  }
}
