import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPreview } from './step-preview';

describe('StepPreview', () => {
  let component: StepPreview;
  let fixture: ComponentFixture<StepPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
