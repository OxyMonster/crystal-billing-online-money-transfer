import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDraftsComponent } from './user-profile-drafts.component';

describe('UserProfileDraftsComponent', () => {
  let component: UserProfileDraftsComponent;
  let fixture: ComponentFixture<UserProfileDraftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileDraftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileDraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
