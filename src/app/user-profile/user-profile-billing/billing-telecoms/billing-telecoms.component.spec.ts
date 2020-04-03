import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsTelecomsComponent } from './billing-telecoms.component';

describe('DraftsTelecomsComponent', () => {
  let component: DraftsTelecomsComponent;
  let fixture: ComponentFixture<DraftsTelecomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsTelecomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsTelecomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
