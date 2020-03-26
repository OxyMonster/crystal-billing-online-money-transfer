import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileHomeComponent } from './user-profile-home.component';

describe('UserProfileHomeComponent', () => {
  let component: UserProfileHomeComponent;
  let fixture: ComponentFixture<UserProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
