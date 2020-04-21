import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesElectricityComponent } from './utilities-electricity.component';

describe('UtilitiesElectricityComponent', () => {
  let component: UtilitiesElectricityComponent;
  let fixture: ComponentFixture<UtilitiesElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
