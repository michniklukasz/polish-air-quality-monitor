import { TestBed } from '@angular/core/testing';

import { StationsDataService } from './stations-data.service';

describe('StationsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StationsDataService = TestBed.get(StationsDataService);
    expect(service).toBeTruthy();
  });
});
