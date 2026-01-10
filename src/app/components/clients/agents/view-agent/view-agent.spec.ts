import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgent } from './view-agent';

describe('ViewAgent', () => {
  let component: ViewAgent;
  let fixture: ComponentFixture<ViewAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAgent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAgent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
