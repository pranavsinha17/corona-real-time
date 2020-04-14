import { TestBed } from '@angular/core/testing';

import { StateWiseStatServiceService } from './state-wise-stat-service.service';

describe('StateWiseStatServiceService', () => {
  let service: StateWiseStatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateWiseStatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
