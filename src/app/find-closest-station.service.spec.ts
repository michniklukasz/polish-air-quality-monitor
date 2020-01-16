import { TestBed } from '@angular/core/testing';

import { FindClosestStationService } from './find-closest-station.service';

describe('FindClosestStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindClosestStationService = TestBed.get(FindClosestStationService);
    expect(service).toBeTruthy();
  });
});
