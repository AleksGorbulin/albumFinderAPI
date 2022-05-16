import { Component, OnInit } from '@angular/core';
import { FinderService } from '../../finder-service.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  constructor(private finderService:FinderService) { }

  albums=[];
  ngOnInit(): void {
    this.finderService.updateAlbums.subscribe(
      receivedAlbums=>{
        this.albums= receivedAlbums;
        }

    )}

  }


