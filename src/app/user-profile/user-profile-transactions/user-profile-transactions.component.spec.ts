import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTransactionsComponent } from './user-profile-transactions.component';

describe('UserProfileTransactionsComponent', () => {
  let component: UserProfileTransactionsComponent;
  let fixture: ComponentFixture<UserProfileTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
