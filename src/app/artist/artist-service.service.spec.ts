import { TestBed, inject } from '@angular/core/testing';

import { ArtistServiceService } from './artist-service.service';

describe('ArtistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistServiceService]
    });
  });

  it('should be created', inject([ArtistServiceService], (service: ArtistServiceService) => {
    expect(service).toBeTruthy();
  }));
});
