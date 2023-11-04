import { TestBed } from '@angular/core/testing';

import { OrganizationserviceService } from './organizationservice.service';

describe('OrganizationserviceService', () => {
  let service: OrganizationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
