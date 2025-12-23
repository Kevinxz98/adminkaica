import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkAgentDetailsCardSkeleton } from './spk-agent-details-card-skeleton';

describe('SpkAgentDetailsCardSkeleton', () => {
  let component: SpkAgentDetailsCardSkeleton;
  let fixture: ComponentFixture<SpkAgentDetailsCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpkAgentDetailsCardSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpkAgentDetailsCardSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
