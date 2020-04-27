import { TestBed } from '@angular/core/testing';

import { NowdateService } from './nowdate.service';

describe('NowdateService', () => {
  let service: NowdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
