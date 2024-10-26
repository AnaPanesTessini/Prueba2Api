import { TestBed } from '@angular/core/testing';

import { LightGreyApiService } from './light-grey-api.service';

describe('LightGreyApiService', () => {
  let service: LightGreyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightGreyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
