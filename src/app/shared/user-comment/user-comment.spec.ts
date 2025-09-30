import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComment } from './user-comment';

describe('UserComment', () => {
  let component: UserComment;
  let fixture: ComponentFixture<UserComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
