import { Component, OnInit } from '@angular/core';
import { ArtistServiceService } from '../artist-service.service';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artistcrud',
  templateUrl: './artistcrud.component.html',
  // template: `
  //   <h1>State in details component</h1>
  //   <pre>{{ state$ | async | json }}</pre>
  // `,
  styleUrls: ['./artistcrud.component.css']
})
export class ArtistcrudComponent implements OnInit {
  dataObj;
  artistShow;
  state$: Observable<any>;

  constructor(public artistService: ArtistServiceService, public activatedRoute: ActivatedRoute) {
    artistService.change.subscribe(data => {
      this.dataObj = data;
      console.log(this.dataObj, 'yoooo1');
    });
   }

  ngOnInit() {
    this.artistShow = this.artistService.getUser();
    console.log(this.artistShow);
  }
}



