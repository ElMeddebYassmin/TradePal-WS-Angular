import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBlogsComponent } from './list-of-blogs.component';

describe('ListOfBlogsComponent', () => {
  let component: ListOfBlogsComponent;
  let fixture: ComponentFixture<ListOfBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
