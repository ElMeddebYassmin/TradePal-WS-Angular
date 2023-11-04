import { TestBed } from '@angular/core/testing';
import { ObjectService } from './objectservice.service';


describe('Objectservice', () => {
  let service: ObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
