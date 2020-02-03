import { TestBed } from '@angular/core/testing';

import { RegisrService } from './regisr.service';

describe('RegisrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisrService = TestBed.get(RegisrService);
    expect(service).toBeTruthy();
  });
});
