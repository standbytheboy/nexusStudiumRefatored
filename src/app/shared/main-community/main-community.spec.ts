import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommunity } from './main-community';

describe('MainCommunity', () => {
  let component: MainCommunity;
  let fixture: ComponentFixture<MainCommunity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCommunity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommunity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
