import { TestBed } from '@angular/core/testing';

import { FoodRequestsService } from './food-requests.service';

describe('FoodRequestsService', () => {
  let service: FoodRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
