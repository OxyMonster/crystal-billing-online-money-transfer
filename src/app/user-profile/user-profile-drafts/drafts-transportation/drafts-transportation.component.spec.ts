import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsTransportationComponent } from './drafts-transportation.component';

describe('DraftsTransportationComponent', () => {
  let component: DraftsTransportationComponent;
  let fixture: ComponentFixture<DraftsTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
