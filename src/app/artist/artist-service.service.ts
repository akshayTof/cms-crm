import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistServiceService {

  constructor(private http: HttpClient) { }

  private _getArtistData = new Subject<string>();
  artistData$ = this._getArtistData.asObservable();

  getartist() {
    return this.http.get('https://reqres.in/api/users');
  }

  sendData(message: string) {
    this._getArtistData.next(message)
  }
}
