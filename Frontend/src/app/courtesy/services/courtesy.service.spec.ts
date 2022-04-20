import { TestBed } from '@angular/core/testing';

import { CourtesyService } from './courtesy.service';

describe('courtesyervice', () => {
  let service: CourtesyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtesyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
