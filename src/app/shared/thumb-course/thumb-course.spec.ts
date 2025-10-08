import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbCourse } from './thumb-course';

describe('ThumbCourse', () => {
  let component: ThumbCourse;
  let fixture: ComponentFixture<ThumbCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbCourse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
