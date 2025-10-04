import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbVideo } from './thumb-video';

describe('ThumbVideo', () => {
  let component: ThumbVideo;
  let fixture: ComponentFixture<ThumbVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumbVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
