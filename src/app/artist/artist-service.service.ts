import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject, Observable, of} from 'rxjs';
import {Router, Resolve,  ActivatedRouteSnapshot} from '@angular/router';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService  {

  constructor(private http: HttpClient) { }

  private _getArtistData = new Subject<string>();
  artistData$ = this._getArtistData.asObservable();


  artistData;

  // ----- another way ----


  // tslint:disable-next-line: member-ordering
  isOpen;

  @Output() change: EventEmitter<any> = new EventEmitter();

  toggle(dataObj) {
    this.isOpen = dataObj;
  }
// --end of another

  getData(): Observable<any> {
  this.artistData = this._getArtistData.asObservable();
  return of(this.artistData).pipe(delay(3000));

  }

  getartist() {
    return this.http.get('https://reqres.in/api/users');
  }

  sendData(message: string) {
    this._getArtistData.next(message);
  }

  getProducts(): Observable<any> {
    const products = [
      { name: 'shoe', price: 15.99 },
      { name: 'shirt', price: 25.99 },
      { name: 'jeans', price: 54.50 }
    ];
    return of(products).pipe(delay(3000));
  }


}
