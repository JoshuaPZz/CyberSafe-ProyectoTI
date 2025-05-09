import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualReviewsComponent } from './individual-reviews.component';

describe('IndividualReviewsComponent', () => {
  let component: IndividualReviewsComponent;
  let fixture: ComponentFixture<IndividualReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
