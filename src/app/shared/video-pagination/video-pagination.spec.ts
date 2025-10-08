import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPagination } from './video-pagination';

describe('VideoPagination', () => {
  let component: VideoPagination;
  let fixture: ComponentFixture<VideoPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
