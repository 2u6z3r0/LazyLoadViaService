import { TestBed } from '@angular/core/testing';

import { LoadModulesService } from './load-modules.service';

describe('LoadModulesService', () => {
  let service: LoadModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
