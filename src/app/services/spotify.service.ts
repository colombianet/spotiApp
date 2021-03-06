import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  private buildURL( query: string ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB-4zrU6kqmxbz7A000gQic3iGqEymiZD4WIcJFo3_VLtejDxYHipfV6FH4rh62N-tvieOHOx3dVF71gI4'
    });

    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any[]> {
    return this.buildURL(`browse/new-releases?limit=15`).pipe(
      map((resp: any) => {
        return resp.albums.items;
      })
    );

    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBIgj8zMgCy31Inc2GpHsxZn4B1SiebomVhIHHX8n3EDlpQ-3ViQEV_7XaCqJTVQhdP2qHUG0fN6IhWw_I'
    // });
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=15', { headers }).pipe(
    //   map((resp: any) => {
    //     return resp.albums.items;
    //   })
    // );
  }

  getArtists( artista: string ): Observable<any[]> {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCrqSzVt2VQk9Qoww87Z2gPqPUQfL0ZXvbXCtTvy1Wf81zpXEaqJ_vaewKEtSHjPQw8AGzgPZv3ZDeIn3o'
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?query=${ artista }&type=artist&offset=0&limit=15`, { headers }).pipe(
    //   map((resp: any) => {
    //     return resp.artists.items;
    //   })
    // );

    return this.buildURL(`search?query=${ artista }&type=artist&offset=0&limit=15`).pipe(
      map((resp: any) => {
        return resp.artists.items;
      })
    );
  }

  getArtistById( id: string ): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCrqSzVt2VQk9Qoww87Z2gPqPUQfL0ZXvbXCtTvy1Wf81zpXEaqJ_vaewKEtSHjPQw8AGzgPZv3ZDeIn3o'
    // });

    // return this.http.get(`https://api.spotify.com/v1/artists/${ id }`, { headers });

    return this.buildURL(`artists/${ id }`);
  }

  getTopTracks( id: string ): Observable<any> {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQBQCrWZ_EDqc8rs0g5TYzy5yRpglECeKlq5CZv6wQHjgxz42cO4eA_H-0NAmxIZJuQVh9AF46O7HMSqd18aM'
    // });

    // return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=us`, { headers })
      // .pipe( map((resp: any) => {
      //   return resp.tracks;
      // })
    // );
    return this.buildURL(`artists/${id}/top-tracks?market=us`)
      .pipe(
        map((resp: any) => {
          return resp.tracks;
        })
      );
  }
}
