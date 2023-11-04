import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOfOrganizationsComponent } from './list-of-organizations.component';


describe('ListOfOrganizationsComponent', () => {
  let component: ListOfOrganizationsComponent;
  let fixture: ComponentFixture<ListOfOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfOrganizationsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
