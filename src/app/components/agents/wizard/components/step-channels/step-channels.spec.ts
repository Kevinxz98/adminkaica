import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepChannels } from './step-channels';

describe('StepChannels', () => {
  let component: StepChannels;
  let fixture: ComponentFixture<StepChannels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepChannels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepChannels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
