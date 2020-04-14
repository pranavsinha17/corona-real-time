import { TestBed } from '@angular/core/testing';

import { IndiaStatServiceService } from './india-stat-service.service';

describe('IndiaStatServiceService', () => {
  let service: IndiaStatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiaStatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
