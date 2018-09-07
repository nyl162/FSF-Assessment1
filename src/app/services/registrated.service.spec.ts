import { TestBed, inject } from '@angular/core/testing';

import { RegistratedService } from './registrated.service';

describe('RegistratedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistratedService]
    });
  });

  it('should be created', inject([RegistratedService], (service: RegistratedService) => {
    expect(service).toBeTruthy();
  }));
});
