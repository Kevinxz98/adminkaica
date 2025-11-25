import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGeneralInfo } from './step-general-info';

describe('StepGeneralInfo', () => {
  let component: StepGeneralInfo;
  let fixture: ComponentFixture<StepGeneralInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepGeneralInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepGeneralInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
