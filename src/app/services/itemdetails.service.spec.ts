import { TestBed, inject } from '@angular/core/testing';

import { ItemdetailsService } from './itemdetails.service';

describe('ItemdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemdetailsService]
    });
  });

  it('should be created', inject([ItemdetailsService], (service: ItemdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
