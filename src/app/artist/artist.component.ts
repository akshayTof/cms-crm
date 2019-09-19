import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistServiceService } from './artist-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;

  constructor(private artistService: ArtistServiceService, public router: Router) { }

  ngOnInit() {
    this.artistService.getartist().subscribe(artistData => {
      this.artist = artistData;
      console.log('this.artist');
    });
  }

  userView(dataObj) {

    // this.artistService.sendData(dataObj);
    // console.log('yeah itty21312');
    // this.router.navigateByUrl('home');
    //----

    console.log(dataObj , "data obj")

    this.artistService.setUser(dataObj);
     this.router.navigateByUrl('home');


  }

  userBlock() {
    console.log('yeah itty');
  }

  userEdit() {
    console.log('yeah tytyty');
  }

}
