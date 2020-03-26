import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoLogoutComponent } from './user-info-logout.component';

describe('UserInfoLogoutComponent', () => {
  let component: UserInfoLogoutComponent;
  let fixture: ComponentFixture<UserInfoLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
