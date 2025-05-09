import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePlaythroughComponent } from './course-playthrough.component';

describe('CoursePlaythroughComponent', () => {
  let component: CoursePlaythroughComponent;
  let fixture: ComponentFixture<CoursePlaythroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePlaythroughComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePlaythroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
