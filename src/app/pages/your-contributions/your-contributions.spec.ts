import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourContributions } from './your-contributions';

describe('YourContributions', () => {
  let component: YourContributions;
  let fixture: ComponentFixture<YourContributions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourContributions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourContributions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
