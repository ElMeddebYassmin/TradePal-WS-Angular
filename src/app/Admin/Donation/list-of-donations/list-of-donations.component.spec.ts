import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfObjectsComponent } from './list-of-donations.component';

describe(' ListOfObjectsComponent', () => {
  let component:  ListOfObjectsComponent;
  let fixture: ComponentFixture< ListOfObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ListOfObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( ListOfObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
