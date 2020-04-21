import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesWaterComponent } from './utilities-water.component';

describe('UtilitiesWaterComponent', () => {
  let component: UtilitiesWaterComponent;
  let fixture: ComponentFixture<UtilitiesWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
