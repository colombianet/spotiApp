import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];
  loading: boolean | undefined;

  constructor( private spoty: SpotifyService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.spoty.getNewReleases().subscribe( resp => {
      this.items = resp;
      this.loading = false;
    });
  }

}
