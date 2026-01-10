import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkProfileSkeleton } from './spk-profile-skeleton';

describe('SpkProfileSkeleton', () => {
  let component: SpkProfileSkeleton;
  let fixture: ComponentFixture<SpkProfileSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpkProfileSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpkProfileSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
