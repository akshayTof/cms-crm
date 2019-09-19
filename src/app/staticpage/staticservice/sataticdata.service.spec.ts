import { TestBed } from '@angular/core/testing';

import { SataticdataService } from './sataticdata.service';

describe('SataticdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SataticdataService = TestBed.get(SataticdataService);
    expect(service).toBeTruthy();
  });
});
