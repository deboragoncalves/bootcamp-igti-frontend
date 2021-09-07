import { TestBed } from '@angular/core/testing';

import { TotalRequestService } from './total-request.service';

describe('TotalRequestService', () => {
  let service: TotalRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
