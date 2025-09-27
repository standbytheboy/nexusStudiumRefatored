import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiedTopics } from './studied-topics';

describe('StudiedTopics', () => {
  let component: StudiedTopics;
  let fixture: ComponentFixture<StudiedTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiedTopics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiedTopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
