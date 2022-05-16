import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Artist } from './artist.interface';
@Injectable({
  providedIn: 'root'
})

export class FinderService {
updatedSearch = new EventEmitter<Artist[]>();
updateAlbums= new EventEmitter<any>();
foundArtists:Artist[]=[];
foundAlbums=[];
apiKey="523532";
  constructor(private http: HttpClient) { }
// tap(artist => console.log("artist ", ...artist)
  findArtist(name){
    let headers = new HttpHeaders({
    });
    this.http.get<any>('https://www.theaudiodb.com/api/v1/json/2/search.php?s='+name,{'headers':headers})
    .pipe(
      map(mapResponse => mapResponse['artists']),
      tap(artist => console.log("artist ", ...artist))
    ).subscribe(
      responce=>{
        if(responce!=null){
          this.foundArtists.push(...responce);
          this.updatedSearch.emit(this.foundArtists);
          this.foundArtists=[];
        } else{
          this.updatedSearch.emit(null);
        }

      },
      (error)=>{this.updatedSearch.emit(null)}
    )
  }

  fetchAlbums(artistId){
    this.foundAlbums=[];
    let headers = new HttpHeaders({
    });
    this.http.get<any>('https://www.theaudiodb.com/api/v1/json/2/album.php?i='+artistId,{'headers':headers})
    .subscribe(
      responce=>{
        this.foundAlbums.push(...responce.album);
        this.updateAlbums.emit(this.foundAlbums);
      }
    )
  }
}

