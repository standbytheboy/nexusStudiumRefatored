import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentExercises } from './recent-exercises';

describe('RecentExercises', () => {
  let component: RecentExercises;
  let fixture: ComponentFixture<RecentExercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentExercises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentExercises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
