import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesWasteRemovalComponent } from './utilities-waste-removal.component';

describe('UtilitiesWasteRemovalComponent', () => {
  let component: UtilitiesWasteRemovalComponent;
  let fixture: ComponentFixture<UtilitiesWasteRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesWasteRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesWasteRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
