import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationShippingComponent } from './transportation-shipping.component';

describe('TransportationShippingComponent', () => {
  let component: TransportationShippingComponent;
  let fixture: ComponentFixture<TransportationShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
