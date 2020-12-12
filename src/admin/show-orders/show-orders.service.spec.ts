import { TestBed } from '@angular/core/testing';

import { ShowOrdersService } from './show-orders.service';

describe('ShowOrdersService', () => {
  let service: ShowOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
