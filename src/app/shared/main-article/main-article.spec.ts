import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticle } from './main-article';

describe('MainArticle', () => {
  let component: MainArticle;
  let fixture: ComponentFixture<MainArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
