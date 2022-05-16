import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsListComponent } from './artists-list/albums-list/albums-list.component'; // CLI imports router


const routes: Routes = [
  {path:'',redirectTo:'artists', pathMatch:'full'},
  {path:'artists',component: ArtistsListComponent, children:[
    {path:'albums', component:AlbumsListComponent}
  ]},

]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistsListComponent,
    AlbumsListComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
