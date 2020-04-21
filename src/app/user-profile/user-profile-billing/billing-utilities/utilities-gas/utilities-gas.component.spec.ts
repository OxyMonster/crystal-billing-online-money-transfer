import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesGasComponent } from './utilities-gas.component';

describe('UtilitiesGasComponent', () => {
  let component: UtilitiesGasComponent;
  let fixture: ComponentFixture<UtilitiesGasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesGasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
