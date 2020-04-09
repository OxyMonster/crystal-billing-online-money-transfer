import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsInternetComponent } from './telecoms-internet.component';

describe('TelecomsInternetComponent', () => {
  let component: TelecomsInternetComponent;
  let fixture: ComponentFixture<TelecomsInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomsInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomsInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
