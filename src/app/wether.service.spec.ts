import { TestBed } from '@angular/core/testing';

import { WetherService } from './wether.service';

describe('WetherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WetherService = TestBed.get(WetherService);
    expect(service).toBeTruthy();
  });
});
