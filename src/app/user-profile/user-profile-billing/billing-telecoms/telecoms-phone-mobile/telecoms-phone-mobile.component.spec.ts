import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsPhoneMobileComponent } from './telecoms-phone-mobile.component';

describe('TelecomsPhoneMobileComponent', () => {
  let component: TelecomsPhoneMobileComponent;
  let fixture: ComponentFixture<TelecomsPhoneMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsPhoneMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsPhoneMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
