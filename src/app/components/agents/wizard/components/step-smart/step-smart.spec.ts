import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSmart } from './step-smart';

describe('StepSmart', () => {
  let component: StepSmart;
  let fixture: ComponentFixture<StepSmart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSmart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSmart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
