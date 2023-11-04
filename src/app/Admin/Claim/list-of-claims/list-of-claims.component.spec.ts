import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfClaimsComponent } from './list-of-claims.component';

describe('ListOfClaimsComponent', () => {
  let component: ListOfClaimsComponent;
  let fixture: ComponentFixture<ListOfClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
