import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMessages } from './step-messages';

describe('StepMessages', () => {
  let component: StepMessages;
  let fixture: ComponentFixture<StepMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
