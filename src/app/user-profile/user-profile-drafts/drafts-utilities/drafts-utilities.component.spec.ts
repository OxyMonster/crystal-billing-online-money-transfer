import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsUtilitiesComponent } from './drafts-utilities.component';

describe('DraftsUtilitiesComponent', () => {
  let component: DraftsUtilitiesComponent;
  let fixture: ComponentFixture<DraftsUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftsUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftsUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
