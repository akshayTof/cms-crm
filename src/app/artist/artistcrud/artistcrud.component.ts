import { Component, OnInit } from '@angular/core';
import { ArtistServiceService } from '../artist-service.service';

@Component({
  selector: 'app-artistcrud',
  templateUrl: './artistcrud.component.html',
  styleUrls: ['./artistcrud.component.css']
})
export class ArtistcrudComponent implements OnInit {

  artistGetData: any = {};
  setData:boolean =false
  constructor(public artistService: ArtistServiceService) {
    artistService.artistData$.subscribe(
      (message) => {
        console.log(message);
        console.log(this.setData);

        this.artistGetData = {first_name: 'akshay'};
        console.log(this.setData);
        console.log(this.artistGetData[0].first_name);
      }
    )
  }

  ngOnInit(){
    setTimeout(()=>{
      this.setData = true
      console.log(this.artistService.artistData$);
    },500)
  }

}
