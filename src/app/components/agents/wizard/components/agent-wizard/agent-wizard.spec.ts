import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWizard } from './agent-wizard';

describe('AgentWizard', () => {
  let component: AgentWizard;
  let fixture: ComponentFixture<AgentWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentWizard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentWizard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
