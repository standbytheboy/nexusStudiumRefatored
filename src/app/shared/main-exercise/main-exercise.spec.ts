import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExercise } from './main-exercise';

describe('MainExercise', () => {
  let component: MainExercise;
  let fixture: ComponentFixture<MainExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainExercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainExercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
