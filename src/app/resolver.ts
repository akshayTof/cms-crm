// resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {ArtistServiceService  } from '../app/artist/artist-service.service';

@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor(private api: ArtistServiceService) { }

  resolve() {
    return this.api.artistData$;
  }
}