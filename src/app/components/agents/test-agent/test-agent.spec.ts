import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAgent } from './test-agent';

describe('TestAgent', () => {
  let component: TestAgent;
  let fixture: ComponentFixture<TestAgent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAgent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAgent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
