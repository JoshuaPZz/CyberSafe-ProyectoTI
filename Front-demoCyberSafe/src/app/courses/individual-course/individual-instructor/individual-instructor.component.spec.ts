import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInstructorComponent } from './individual-instructor.component';

describe('IndividualInstructorComponent', () => {
  let component: IndividualInstructorComponent;
  let fixture: ComponentFixture<IndividualInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualInstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
