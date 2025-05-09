import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualFaqsComponent } from './individual-faqs.component';

describe('IndividualFaqsComponent', () => {
  let component: IndividualFaqsComponent;
  let fixture: ComponentFixture<IndividualFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualFaqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
