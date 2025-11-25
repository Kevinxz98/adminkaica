import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSave } from './step-save';

describe('StepSave', () => {
  let component: StepSave;
  let fixture: ComponentFixture<StepSave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
