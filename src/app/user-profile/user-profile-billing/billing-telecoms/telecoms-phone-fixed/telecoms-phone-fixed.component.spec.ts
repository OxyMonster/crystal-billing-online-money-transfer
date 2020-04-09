import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsPhoneFixedComponent } from './telecoms-phone-fixed.component';

describe('TelecomsPhoneFixedComponent', () => {
  let component: TelecomsPhoneFixedComponent;
  let fixture: ComponentFixture<TelecomsPhoneFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsPhoneFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsPhoneFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
