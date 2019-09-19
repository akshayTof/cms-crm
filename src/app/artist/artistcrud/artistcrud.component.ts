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
  setData: Promise<boolean>;
  products;
  dataObj;
  artistGetData1: any = [];
  artistGetData: any = [];
  setdata1 = false;


  state$: Observable<any>;

  constructor(public artistService: ArtistServiceService, public activatedRoute: ActivatedRoute) {
    artistService.change.subscribe(data => {
      this.dataObj = data;
      console.log(this.dataObj, 'yoooo1');
    });
   }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );
    this.artistService.getProducts().subscribe(products => this.products = products);
  // this.artistGetData1.push({first_name: 'akshay', id:24});

    this.artistService.artistData$.subscribe(
    (message) => {
      console.log(message);
      console.log(this.setData);
      this.artistGetData.push(message);
      console.log(this.artistGetData);
    }
  );

  // ----


  console.log(this.dataObj, 'yoooo');

  // ----

    this.artistService.getData().subscribe(data => this.artistGetData1.push(data));

    // console.log(this.artistGetData1);
    // console.log(this.artistGetData);
    // console.log(this.products);

  //   async (message) => {
  //     this.setdata1 = true;
  //     console.log(message);
  //     console.log(this.setdata1, 'kya chal');
  //     this.artistGetData = [{first_name: 'akshay', id:24}];
  // console.log(typeof this.artistGetData);

  //     this.setData = Promise.resolve(true); // Setting the Promise as resolved after I have the needed data
  //     }
  //   )
  }
}



