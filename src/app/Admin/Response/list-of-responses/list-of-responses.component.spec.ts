import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfResponsesComponent } from './list-of-responses.component';

describe('ListOfResponsesComponent', () => {
  let component: ListOfResponsesComponent;
  let fixture: ComponentFixture<ListOfResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
