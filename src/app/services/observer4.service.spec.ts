import { TestBed } from '@angular/core/testing';

import { Observer4Service } from './observer4.service';

describe('Observer4Service', () => {
  let service: Observer4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Observer4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
