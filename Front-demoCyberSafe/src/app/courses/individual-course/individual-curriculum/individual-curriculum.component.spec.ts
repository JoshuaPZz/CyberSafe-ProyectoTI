import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCurriculumComponent } from './individual-curriculum.component';

describe('IndividualCurriculumComponent', () => {
  let component: IndividualCurriculumComponent;
  let fixture: ComponentFixture<IndividualCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualCurriculumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
