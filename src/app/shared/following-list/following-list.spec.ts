import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingList } from './following-list';

describe('FollowingList', () => {
  let component: FollowingList;
  let fixture: ComponentFixture<FollowingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
