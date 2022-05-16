import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.interface';
import { FinderService} from '../finder-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  searchValue='';
  artists=[];
  showMessage=false;

  constructor(private finderService:FinderService,
              private router:Router) { }

  ngOnInit(): void {
    this.finderService.updatedSearch.subscribe(
      responce=>{
          if(responce!=null){
            this.artists.push(...responce);
            this.showMessage=false;
          }else{
            this.showMessage=true;
          }

      }
    )
  }
  searchArtist(){
    this.artists=[];
    this.finderService.findArtist(this.searchValue);
    this.router.navigate(['artists']);
  }
  showArtistsPlaylist(artistId){
    this.finderService.fetchAlbums(artistId);
    this.router.navigate(['artists/albums']);
  }
}
