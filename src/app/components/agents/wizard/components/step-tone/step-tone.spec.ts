import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTone } from './step-tone';

describe('StepTone', () => {
  let component: StepTone;
  let fixture: ComponentFixture<StepTone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
