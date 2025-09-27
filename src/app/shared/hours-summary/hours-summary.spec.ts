import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursSummary } from './hours-summary';

describe('HoursSummary', () => {
  let component: HoursSummary;
  let fixture: ComponentFixture<HoursSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
