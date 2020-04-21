import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationTravelComponent } from './transportation-travel.component';

describe('TransportationTravelComponent', () => {
  let component: TransportationTravelComponent;
  let fixture: ComponentFixture<TransportationTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
