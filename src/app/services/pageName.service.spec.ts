import { TestBed } from '@angular/core/testing';

import { PageNameService } from './pageName.service';

describe('PageNameService', () => {
  let service: PageNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
