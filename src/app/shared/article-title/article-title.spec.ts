import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTitle } from './article-title';

describe('ArticleTitle', () => {
  let component: ArticleTitle;
  let fixture: ComponentFixture<ArticleTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
